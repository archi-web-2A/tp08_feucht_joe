import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-multi-range-slider',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './multi-range-slider.component.html',
  styleUrl: './multi-range-slider.component.css'
})
export class MultiRangeSliderComponent implements OnChanges {

  @Input() maxValue!: number;
  @Output() inputChange = new EventEmitter<{ minValue: number; maxValue: number }>();

  minInputValue: number = 0;
  minSliderValue: number = 0;
  maxInputValue!: number;
  maxSliderValue!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['maxValue']) {
      this.maxInputValue = this.maxValue;
      this.maxSliderValue = this.maxValue;
    }
  }

  onInputChange() {
    const minValue = this.minInputValue
    const maxValue = this.maxInputValue

    this.inputChange.emit({ minValue: minValue, maxValue: maxValue });
  }
}
