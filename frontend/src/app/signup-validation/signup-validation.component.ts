import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-signup-validation',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './signup-validation.component.html',
  styleUrl: './signup-validation.component.css'
})
export class SignupValidationComponent {
  name = 'Joé';
}
