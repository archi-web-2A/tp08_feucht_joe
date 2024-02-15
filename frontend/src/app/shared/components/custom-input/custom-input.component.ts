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
  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() inputIcon: string;

  constructor() {
    this.control = new FormControl();
    this.placeholder = '';
    this.inputIcon = '';
  }


}
