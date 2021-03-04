import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPageRoutingModule } from './order-page-routing.module';
import { OrderPageComponent } from './order-page.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {InputMaskModule} from "primeng/inputmask";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [OrderPageComponent],
  imports: [
    CommonModule,
    OrderPageRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    InputMaskModule,
    ToastModule,
    RippleModule
  ]
})
export class OrderPageModule { }
