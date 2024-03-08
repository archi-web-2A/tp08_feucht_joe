import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-search-bar-catalogue',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './product-search-bar-catalogue.component.html',
  styleUrl: './product-search-bar-catalogue.component.css'
})
export class ProductSearchBarCatalogueComponent {
  @Input() placeholder: string
  @Input() inputIcon: string

  @Output() inputChange = new EventEmitter<string>();
  searchInputField!: string

  constructor() {
    this.placeholder = ''
    this.inputIcon = ''
  }

  onSearchInputChange(searchInputField: string) {
    this.inputChange.emit(searchInputField.toLowerCase())
  }
}
