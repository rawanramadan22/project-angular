import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.updateActiveLink();
    });
  }

  updateActiveLink(): void {
    const currentRoute = this.route.root.firstChild?.routeConfig?.path || '';
    const links = document.querySelectorAll('.nav-links li a');

    links.forEach((link) => {
      link.classList.remove('active-link');
      if (link.getAttribute('routerLink') === `/${currentRoute}`) {
        link.classList.add('active-link');
      }
    });
  }
}
