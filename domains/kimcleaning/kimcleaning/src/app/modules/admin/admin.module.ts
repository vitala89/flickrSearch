import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {OrdersPageComponent} from './orders-page/orders-page.component';
import {MenubarModule} from "primeng/menubar";
import {SharedModule} from "primeng/api";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent, DashboardPageComponent, OrdersPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MenubarModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class AdminModule {
}
