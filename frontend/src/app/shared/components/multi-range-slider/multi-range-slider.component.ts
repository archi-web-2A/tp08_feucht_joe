import {Component, Input} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms"

@Component({
  selector: 'app-multi-range-slider',
  standalone: true,
  imports: [MatSliderModule, FormsModule, ReactiveFormsModule],
  templateUrl: './multi-range-slider.component.html',
  styleUrl: './multi-range-slider.component.css'
})
export class MultiRangeSliderComponent {

  @Input() controlMin!: FormControl;
  @Input() controlMax!: FormControl;
  minSliderValue = 0;
  maxSliderValue = 30000;
  minInputValue = 0
  maxInputValue = 30000;
}
