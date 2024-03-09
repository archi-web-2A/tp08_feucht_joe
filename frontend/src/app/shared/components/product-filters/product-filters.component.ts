import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MinMaxProductValuesComponent} from "../min-max-product-values/min-max-product-values.component";
import {MultiRangeSliderComponent} from "../multi-range-slider/multi-range-slider.component";
import {
  ProductSearchBarCatalogueComponent
} from "../product-search-bar/product-search-bar-catalogue/product-search-bar-catalogue.component";
import {combineLatest, startWith} from "rxjs";
import {Product} from "../../../core/models/product";
import {ProductService} from "../../../core/services/product.service";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [
    MinMaxProductValuesComponent,
    MultiRangeSliderComponent,
    ProductSearchBarCatalogueComponent,
    ReactiveFormsModule
  ],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.css'
})
export class ProductFiltersComponent implements OnInit {

  @Output() products$: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  filters = this.fb.nonNullable.group({
    name: [''],
    brand: [''],
    motorbikeType: [''],
    color: [''],
    minKilometers: null,
    maxKilometers: null,
    minPrice: null,
    maxPrice: null,
    minCubicCentimetre: null,
    maxCubicCentimetre: null,
    minBuildProductionYear: null,
    maxBuildProductionYear: null
  })

  constructor(private productService: ProductService, private fb: FormBuilder) {}

  ngOnInit(): void {
    const products$ = this.productService.getProducts();
    const search$ = combineLatest([
      this.filters.controls.name.valueChanges.pipe(startWith('')),
      this.filters.controls.brand.valueChanges.pipe(startWith('')),
      this.filters.controls.motorbikeType.valueChanges.pipe(startWith('')),
      this.filters.controls.color.valueChanges.pipe(startWith('')),
      this.filters.controls.minKilometers.valueChanges.pipe(startWith(0)),
      this.filters.controls.maxKilometers.valueChanges.pipe(startWith(200000)),
      this.filters.controls.minPrice.valueChanges.pipe(startWith(0)),
      this.filters.controls.maxPrice.valueChanges.pipe(startWith(200000)),
      this.filters.controls.minCubicCentimetre.valueChanges.pipe(startWith(0)),
      this.filters.controls.maxCubicCentimetre.valueChanges.pipe(startWith(200000)),
      this.filters.controls.minBuildProductionYear.valueChanges.pipe(startWith(0)),
      this.filters.controls.maxBuildProductionYear.valueChanges.pipe(startWith(200000)),
    ])

    combineLatest([products$, search$]).subscribe(([products, [name, brand, motorbikeType, color, minKilometers, maxKilometers, minPrice, maxPrice, minCubicCentimetre, maxCubicCentimetre, minBuildProductionYear, maxBuildProductionYear]]) => {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase()) &&
        product.brand.toLowerCase().includes(brand.toLowerCase()) &&
        product.motorbikeType.toLowerCase().includes(motorbikeType.toLowerCase()) &&
        product.color.toLowerCase().includes(color.toLowerCase()) &&
        (!minKilometers || product.kilometers >= minKilometers) &&
        (!maxKilometers || product.kilometers <= maxKilometers) &&
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!minCubicCentimetre || product.cubicCentimetre >= minCubicCentimetre) &&
        (!maxCubicCentimetre || product.cubicCentimetre <= maxCubicCentimetre) &&
        (!minBuildProductionYear || product.buildProductionYear >= minBuildProductionYear) &&
        (!maxBuildProductionYear || product.buildProductionYear <= maxBuildProductionYear)
      );
      this.products$.emit(filteredProducts);
    });
  }
}
