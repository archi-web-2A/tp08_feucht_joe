import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomInputComponent} from "../custom-input/custom-input.component";

@Component({
  selector: 'app-sign-forms',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    CustomInputComponent,
  ],
  templateUrl: './sign-forms.component.html',
  styleUrl: './sign-forms.component.css'
})
export class SignFormsComponent {
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
  })

  get signinInfo() {
    return this.signinForm.controls;
  }

  get signupInfo() {
    return this.signupForm.controls;
  }

  onSubmitSignin() {

  }

  onSubmitSignup() {

  }

}
