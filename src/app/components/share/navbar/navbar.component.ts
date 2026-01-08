import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, // directive to change the behaviour of anchor with routerLink directive
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
