import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {first} from "rxjs";

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
  firstName = 'Joé';
  lastName = 'Feucht';
  email = 'eren.yeager@gmail.com';
  phoneNumber = '0612345678';
  gender = 'Homme';
  birthDate = '1999-12-31';
  address = '1 rue de la paix';
  city = 'Strasbourg';
  postalCode = '67000';
}
