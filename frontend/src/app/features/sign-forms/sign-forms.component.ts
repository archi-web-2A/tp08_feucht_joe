import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomInputComponent} from "../../shared/components/custom-input/custom-input.component";
import { UserService } from "../../core/services/user.service";
import { User } from "../../core/models/user";

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
  showSignupFailureMessage = false;

  constructor(private router: Router, private userService: UserService) {
  }

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
  })

  onSubmitSignup() {
    this.markFormGroupDirty(this.signupForm);
    if(this.signupForm.valid) {
      this.showSignupFailureMessage = false;
      let user = this.convertFormGroupToUser(this.signupForm);
      this.userService.createUser(user);
      this.router.navigate(['/signup-validation']);
    } else {
      this.showSignupFailureMessage = true;
    }
  }

  convertFormGroupToUser(form: FormGroup): User {
    return {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
      gender: form.value.gender,
      birthDate: form.value.birthDate,
      location: form.value.location,
      city: form.value.city,
      postalCode: form.value.postalCode,
      password: form.value.password,
    }
  }

  markFormGroupDirty(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsDirty();

      if (control instanceof FormGroup) {
        this.markFormGroupDirty(control);
      }
    });
  }

  get signinInfo() {
    return this.signinForm.controls;
  }

  get signupInfo() {
    return this.signupForm.controls;
  }

  onSubmitSignin() {
  }



}
