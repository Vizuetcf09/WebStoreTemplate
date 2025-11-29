import { WebPageResponse } from "../interfaces/webPageApi.interface";
import { Product } from "../interfaces/products.interfaces";

export class ProductMapper {

  static mapProductsItemsToProduct(item: WebPageResponse): Product {
    return {
      _id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      stock: item.stock,
      imageUrl: item.imageUrl,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    };
  }

  static mapProductsItemsToProductArray(items: WebPageResponse[]): Product[] {
    return items.map(this.mapProductsItemsToProduct);
  }

}