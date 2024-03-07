import {Component, OnDestroy} from '@angular/core';
import {ProductService} from "../../../../core/services/product.service";
import {Product} from "../../../../core/models/product";
import {Observable, Subscription} from "rxjs";
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-search-bar-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-search-bar-header.component.html',
  styleUrl: './product-search-bar-header.component.css'
})
export class ProductSearchBarHeaderComponent implements OnDestroy {
  products$: Observable<Product[]>
  filteredProducts!: Product[]
  searchInputField = ''
  productsSubscription!: Subscription

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts()
  }

  productFiltering(searchInputField: string): void {
    if (searchInputField.trim() === '') {
      this.filteredProducts = []
      return
    }

    this.productsSubscription = this.products$.subscribe(products => {
      this.filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchInputField.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchInputField.toLowerCase())
      });
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe()
    }
  }
}
