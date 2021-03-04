import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Политика конфиденциальности',
      }
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
