import { Routes } from '@angular/router';
import { HeroComponent } from "./features/hero/hero.component";
import { SignFormsComponent } from "./features/sign-forms/sign-forms.component";
import { SignupValidationComponent } from "./features/sign-forms/signup-validation/signup-validation.component";
import {CardsComponent} from "./shared/modules/cards/cards/cards.component";

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'signup-validation', component: SignupValidationComponent },
  { path: 'sign-forms', component: SignFormsComponent},
  { path: 'cards', component: CardsComponent}

];
