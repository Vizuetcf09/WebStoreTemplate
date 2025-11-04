import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './components/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './home.component.html',
})
export class HomeComponent { }
