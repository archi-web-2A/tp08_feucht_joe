import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {MinMaxProductValuesComponent} from "../min-max-product-values/min-max-product-values.component";
import {MultiRangeSliderComponent} from "../multi-range-slider/multi-range-slider.component";
import {
  ProductSearchBarCatalogueComponent
} from "../product-search-bar/product-search-bar-catalogue/product-search-bar-catalogue.component";
import {Subscription} from "rxjs";
import {Product} from "../../../core/models/product";
import {ProductService} from "../../../core/services/product.service";

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
export class ProductFiltersComponent implements OnDestroy {

  products: Product[] = []
  productServiceSubscription: Subscription
  filteredProducts: Product[] = []
  maxKilometersSlider!: number
  maxPriceSlider!: number

  // Filters
  model!: string
  brand!: string
  type!: string
  color!: string
  minKilometers!: number
  maxKilometers!: number
  minCubicCentimetre!: number
  maxCubicCentimetre!: number
  minBuildProductionYear!: number
  maxBuildProductionYear!: number
  minPrice!: number
  maxPrice!:number

  @Output() filteredProductsChange = new EventEmitter<Product[]>();

  constructor(private productService: ProductService) {
    this.productServiceSubscription = this.productService.getProducts().subscribe(products => {
      this.products = products
      this.filteredProducts = this.products
      this.maxKilometersSlider = Math.max(...this.products.map(product => product?.kilometers || 0));
      this.maxPriceSlider = Math.max(...this.products.map(product => product?.price || 0));
      this.filteredProductsChange.emit(this.filteredProducts);
    })
  }

  onModelChange(newModel: string): void{
    this.model = newModel
    this.applyFilters()
  }

  onBrandChange(newBrand: string): void {
    this.brand = newBrand
    this.applyFilters()
  }

  onTypeChange(newType: string): void {
    this.type = newType
    this.applyFilters()
  }

  onColorChange(newColor: string): void {
    this.color = newColor
    this.applyFilters()
  }

  onKilometersChange(values: { minValue: number; maxValue: number }){
    this.minKilometers = values.minValue;
    this.maxKilometers = values.maxValue;
    this.applyFilters()
  }

  onPriceChange(values: { minValue: number; maxValue: number }) {
    this.minPrice = values.minValue
    this.maxPrice = values.maxValue
    this.applyFilters()
  }

  onCubicCentimetreChange(values: { minValue: number; maxValue: number }) {
    this.minCubicCentimetre = values.minValue
    this.maxCubicCentimetre = values.maxValue
    this.applyFilters()
  }

  onBuildProductionYear(values: { minValue: number; maxValue: number }) {
    this.minBuildProductionYear = values.minValue
    this.maxBuildProductionYear = values.maxValue
    this.applyFilters()
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product =>
      (!this.model || product.name.toLowerCase().includes(this.model.toLowerCase())) &&
      (!this.brand || product.brand.toLowerCase().includes(this.brand.toLowerCase())) &&
      (!this.type || product.motorbikeType.toLowerCase().includes(this.type.toLowerCase())) &&
      (!this.color || product.color.toLowerCase().includes(this.color.toLowerCase())) &&
      (!this.minKilometers || product.kilometers >= this.minKilometers) &&
      (!this.maxKilometers || product.kilometers <= this.maxKilometers) &&
      (!this.minCubicCentimetre || product.cubicCentimetre >= this.minCubicCentimetre) &&
      (!this.maxCubicCentimetre || product.cubicCentimetre <= this.maxCubicCentimetre) &&
      (!this.minBuildProductionYear || product.buildProductionYear >= this.minBuildProductionYear) &&
      (!this.maxBuildProductionYear || product.buildProductionYear <= this.maxBuildProductionYear) &&
      (!this.minPrice || product.price >= this.minPrice) &&
      (!this.maxPrice || product.price <= this.maxPrice)
    );

    this.filteredProductsChange.emit(this.filteredProducts);
  }

  ngOnDestroy(): void {
    if(this.productServiceSubscription) {
      this.productServiceSubscription.unsubscribe()
    }
  }
}
