import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-search-bar-catalogue',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './product-search-bar-catalogue.component.html',
  styleUrl: './product-search-bar-catalogue.component.css'
})
export class ProductSearchBarCatalogueComponent {

}
