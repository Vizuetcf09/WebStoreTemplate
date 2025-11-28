import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import Product from '../interfaces/webPage.interface';
import { ProductMapper } from '../mapper/product.mapper';

@Injectable({ providedIn: 'root' })
export class WebPageService {
  private http = inject(HttpClient);

  productsSignal = signal<Product[]>([]);

  constructor() {
    this.loadWebPageProducts()
  }

  loadWebPageProducts() {
    this.http
      .get<Product[]>(`${environment.webPageUrl}`)
      .subscribe((resp) => {
        const products = ProductMapper.mapProductsItemsToProductArray(resp);
        this.productsSignal.set(products);
        console.log(products);
      });
  }

}
