import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolCleaningRoutingModule } from './school-cleaning-routing.module';
import { SchoolCleaningComponent } from './school-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [SchoolCleaningComponent],
  imports: [
    CommonModule,
    SchoolCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    BreadcrumbModule
  ]
})
export class SchoolCleaningModule { }
