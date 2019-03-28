import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  navbarCollapsed = true;
  private sub: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.sub = this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.navbarCollapsed = true;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
