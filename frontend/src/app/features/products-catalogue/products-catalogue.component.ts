import { Component } from '@angular/core';
import { ProductService } from "../../core/services/product.service";
import {Product} from "../../core/models/product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './products-catalogue.component.html',
  styleUrl: './products-catalogue.component.css'
})
export class ProductsCatalogueComponent {

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
