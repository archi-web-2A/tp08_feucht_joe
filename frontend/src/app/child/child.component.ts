import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() nomChild : string = "";
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  prenom : string = "";

  sendParent() {
    console.log(this.nomChild);
    this.change.emit(this.prenom + " " + this.nomChild + "siuuuu");
  }


}
