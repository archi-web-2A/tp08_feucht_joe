import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { UserService } from "../../../core/services/user.service";
import {FormsModule} from "@angular/forms";
import {
  CustomDisabledInputComponent
} from "../../../shared/components/custom-disabled-input/custom-disabled-input.component";


@Component({
  selector: 'app-signup-validation',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CustomDisabledInputComponent
  ],
  templateUrl: './signup-validation.component.html',
  styleUrl: './signup-validation.component.css'
})
export class SignupValidationComponent {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  birthDate: string;
  location: string;
  city: string;
  postalCode: string;

  constructor(private formDataService: UserService) {
    const user = this.formDataService.getUser();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.gender = user.gender;
    this.birthDate = user.birthDate;
    this.location = user.location;
    this.city = user.city;
    this.postalCode = user.postalCode;
  }
}
