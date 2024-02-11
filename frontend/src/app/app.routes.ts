import { Routes } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { SignFormsComponent } from "./sign-forms/sign-forms.component";
import { SignupValidationComponent } from "./signup-validation/signup-validation.component";

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'signup-validation', component: SignupValidationComponent },
  { path: 'sign-forms', component: SignFormsComponent}

];
