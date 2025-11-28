import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { WebPageService } from "../../../services/webPage.service";

@Component({
  selector: 'Card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})

export class Card {
  webPageProductsService = inject(WebPageService).productsSignal;
}