import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeCleaningRoutingModule } from './office-cleaning-routing.module';
import { OfficeCleaningComponent } from './office-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [OfficeCleaningComponent],
  imports: [
    CommonModule,
    OfficeCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class OfficeCleaningModule { }
