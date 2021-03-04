import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeCleaningRoutingModule } from './cafe-cleaning-routing.module';
import { CafeCleaningComponent } from './cafe-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [CafeCleaningComponent],
  imports: [
    CommonModule,
    CafeCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    BreadcrumbModule
  ]
})
export class CafeCleaningModule { }
