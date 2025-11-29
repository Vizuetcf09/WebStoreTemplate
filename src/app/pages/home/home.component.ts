import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from "./components/hero/hero.componet";
import { WebPageService } from "../../services/webPage.service";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  productService = inject(WebPageService).productsSignal;
}
