import { Component } from '@angular/core';
import { ProductService } from "../../core/services/product.service";
import {Product} from "../../core/models/product";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ProductComponent} from "../product/product.component";
import {
  ProductSearchBarCatalogueComponent
} from "../../shared/components/product-search-bar/product-search-bar-catalogue/product-search-bar-catalogue.component";
import {MultiRangeSliderComponent} from "../../shared/components/multi-range-slider/multi-range-slider.component";
import {
  MinMaxProductValuesComponent
} from "../../shared/components/min-max-product-values/min-max-product-values.component";

@Component({
  selector: 'app-product-catalogue',
  standalone: true,
  imports: [CommonModule, ProductComponent, ProductSearchBarCatalogueComponent, MultiRangeSliderComponent, MinMaxProductValuesComponent],
  templateUrl: './products-catalogue.component.html',
  styleUrl: './products-catalogue.component.css'
})
export class ProductsCatalogueComponent {

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
