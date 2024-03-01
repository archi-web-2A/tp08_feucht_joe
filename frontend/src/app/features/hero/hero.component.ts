import { Component } from '@angular/core';
import {ProductsCatalogueComponent} from "../products-catalogue/products-catalogue.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ProductsCatalogueComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
