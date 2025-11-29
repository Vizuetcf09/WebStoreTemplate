import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Card } from "../card.component";
import { Product } from "../../../../interfaces/products.interfaces";

@Component({
  selector: 'Hero',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './hero.componet.html'
})
export class Hero {
  @Input() products: Product[] = [];
}