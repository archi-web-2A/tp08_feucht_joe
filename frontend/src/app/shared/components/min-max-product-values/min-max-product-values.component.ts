import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-min-max-product-values',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './min-max-product-values.component.html',
  styleUrl: './min-max-product-values.component.css'
})
export class MinMaxProductValuesComponent {

  @Output() inputChange = new EventEmitter<{ minValue: number; maxValue: number }>();
  minInputValue!: number
  maxInputValue!: number

  onInputChange() {
    const minValue = this.minInputValue
    const maxValue = this.maxInputValue

    this.inputChange.emit({ minValue: minValue, maxValue: maxValue });
  }
}
