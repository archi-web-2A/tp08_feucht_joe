import {Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-min-max-product-values',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './min-max-product-values.component.html',
  styleUrl: './min-max-product-values.component.css'
})
export class MinMaxProductValuesComponent {

  @Input() controlMin!: FormControl;
  @Input() controlMax!: FormControl;

}
