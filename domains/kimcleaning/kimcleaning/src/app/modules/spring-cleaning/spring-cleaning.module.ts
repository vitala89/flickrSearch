import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringCleaningRoutingModule } from './spring-cleaning-routing.module';
import { SpringCleaningComponent } from './spring-cleaning.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {AccordionModule} from "primeng/accordion";


@NgModule({
  declarations: [SpringCleaningComponent],
  imports: [
    CommonModule,
    SpringCleaningRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    TableModule,
    AccordionModule
  ]
})
export class SpringCleaningModule { }
