import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  user = "jean-michel"; // interpolation
  valid = true; // property binding - contrôleur => vue
  message : String = "";
  compteur : number = 0;
  click() : void {
    this.compteur++;
    this.message = "click " + this.compteur;
    console.log(this.message)
  } // event binding - vue => contrôleur

  logPrenomNom(event : String) {
    console.log(event);
  }
}
