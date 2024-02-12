import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-forms',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './sign-forms.component.html',
  styleUrl: './sign-forms.component.css'
})
export class SignFormsComponent {
  signinForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(4)),
    confirmPassword: new FormControl('', Validators.minLength(4)),
  })

  get email() {
    return this.signupForm.get('email');
  }

  onSubmitSignin() {

  }

}
