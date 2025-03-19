// filepath: d:\angular-demos\just-a-girl\src\app\home\main\main.component.ts
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // Component logic here
}