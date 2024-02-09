import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {HeroComponent} from "./hero/hero.component";
import {ProductsComponent} from "./products/products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodyComponent, FooterComponent, HeroComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp02_feucht_joe';
}
