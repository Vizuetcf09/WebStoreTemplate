import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "card",
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
})
export class Card { }