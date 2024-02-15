import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom-disabled-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-disabled-input.component.html',
  styleUrl: './custom-disabled-input.component.css'
})
export class CustomDisabledInputComponent {
  @Input() placeholder: string;
  @Input() inputIcon: string;
  constructor() {
    this.placeholder = '';
    this.inputIcon = '';
  }




}
