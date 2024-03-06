import { Component } from '@angular/core';
import { ProductService } from "../../core/services/product.service";
import {Product} from "../../core/models/product";
import {Observable} from "rxjs";
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

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
