import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './components/card.component';
import { Hero } from "./components/hero/hero.componet";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Card, Hero],
  templateUrl: './home.component.html',
})
export class HomeComponent { }
