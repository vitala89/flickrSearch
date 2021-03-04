import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseCleaningRoutingModule } from './house-cleaning-routing.module';
import { HouseCleaningComponent } from './house-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [HouseCleaningComponent],
  imports: [
    CommonModule,
    HouseCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class HouseCleaningModule { }
