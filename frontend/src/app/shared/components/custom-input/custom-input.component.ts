import { Component, Input } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  constructor() {
    this.errorMessage = '';
    this.placeholder = '';
    this.control = new FormControl();
  }

  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() errorMessage: string;
}
