import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  itemsAuth: MenuItem[];
  items: MenuItem[];
  constructor(public auth:AuthService, private router:Router) {
  }

  ngOnInit(): void {

    this.itemsAuth = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/admin/dashboard']
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/admin/orders'],
        routerLinkActiveOptions: {exact: true},
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-user',
        command: ($event) => {
          event.preventDefault();
          this.auth.logout();
          this.router.navigate(['/admin', 'login'])
        }
      },
    ];
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/admin/login'],
      }
    ];
  }
}
