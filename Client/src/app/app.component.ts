import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { ShopComponent } from "./features/shop/shop.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ShopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Skinet';
}
