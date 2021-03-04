import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceCleaningRoutingModule } from './commerce-cleaning-routing.module';
import { CommerceCleaningComponent } from './commerce-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [CommerceCleaningComponent],
  imports: [
    CommonModule,
    CommerceCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class CommerceCleaningModule { }
