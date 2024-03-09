import { Component } from '@angular/core';
import {Product} from "../../core/models/product";
import {CommonModule} from "@angular/common";
import {ProductComponent} from "../product/product.component";
import {ProductFiltersComponent} from "../../shared/components/product-filters/product-filters.component";

@Component({
  selector: 'app-product-catalogue',
  standalone: true,
  imports: [CommonModule, ProductComponent, ProductFiltersComponent],
  templateUrl: './products-catalogue.component.html',
  styleUrl: './products-catalogue.component.css'
})
export class ProductsCatalogueComponent {

  receivedProducts: Product[] = [];

  handleFilteredProducts(products: Product[]): void {
    this.receivedProducts = products;
  }
}
