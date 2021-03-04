import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalCleaningRoutingModule } from './medical-cleaning-routing.module';
import { MedicalCleaningComponent } from './medical-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [MedicalCleaningComponent],
  imports: [
    CommonModule,
    MedicalCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    BreadcrumbModule
  ]
})
export class MedicalCleaningModule { }
