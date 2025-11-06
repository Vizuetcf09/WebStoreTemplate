import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'Hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.componet.html'
})
export class Hero { }