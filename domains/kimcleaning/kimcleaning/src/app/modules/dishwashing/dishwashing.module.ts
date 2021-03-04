import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishwashingRoutingModule } from './dishwashing-routing.module';
import { DishwashingComponent } from './dishwashing.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [DishwashingComponent],
  imports: [
    CommonModule,
    DishwashingRoutingModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class DishwashingModule { }
