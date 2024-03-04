import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from "@angular/forms"
import {max, min} from "rxjs";

@Component({
  selector: 'app-multi-range-slider',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './multi-range-slider.component.html',
  styleUrl: './multi-range-slider.component.css'
})
export class MultiRangeSliderComponent {
  minValue = 0;
  maxValue = 10000; // Set the initial maxValue to 1000 or your desired maximum value
  minSliderValue = 0; // Set the minimum value of the slider
  maxSliderValue = 10000; // Set the maximum value of the slider
}
