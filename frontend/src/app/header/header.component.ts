import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isConnectionRoute = false;

  constructor(private router: Router) {
    this.checkConnectionRoute();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  checkConnectionRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isConnectionRoute = event.url === '/signup-validation';
      }
    });
  }


}
