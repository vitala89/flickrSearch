import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartCleaningRoutingModule } from './apart-cleaning-routing.module';
import { ApartCleaningComponent } from './apart-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [ApartCleaningComponent],
  imports: [
    CommonModule,
    ApartCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class ApartCleaningModule { }
