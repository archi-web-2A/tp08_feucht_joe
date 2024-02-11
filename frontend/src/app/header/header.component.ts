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
    this.checkRoutes();
  }

  onClickHamburgerButton() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  checkRoutes() {
    this.router.events.subscribe((event) => {
      // Disable the hamburger menu when the user is on another page
      this.isMenuOpen = false;
      if (event instanceof NavigationEnd) {
        this.isConnectionRoute = event.url === '/sign-forms';
      }
    });
  }


}
