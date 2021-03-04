import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DryCleaningRoutingModule } from './dry-cleaning-routing.module';
import { DryCleaningComponent } from './dry-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [DryCleaningComponent],
  imports: [
    CommonModule,
    DryCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class DryCleaningModule { }
