import { Routes } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { ConnectionComponent } from "./connection/connection.component";
import { SignupValidationComponent } from "./signup-validation/signup-validation.component";

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'signup-validation', component: SignupValidationComponent },
  { path: 'connection', component: ConnectionComponent}

];
