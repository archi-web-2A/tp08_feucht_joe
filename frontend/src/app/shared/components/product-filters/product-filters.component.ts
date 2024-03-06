import { Component } from '@angular/core';
import {MinMaxProductValuesComponent} from "../min-max-product-values/min-max-product-values.component";
import {MultiRangeSliderComponent} from "../multi-range-slider/multi-range-slider.component";
import {
  ProductSearchBarCatalogueComponent
} from "../product-search-bar/product-search-bar-catalogue/product-search-bar-catalogue.component";

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [
    MinMaxProductValuesComponent,
    MultiRangeSliderComponent,
    ProductSearchBarCatalogueComponent
  ],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.css'
})
export class ProductFiltersComponent {

}
