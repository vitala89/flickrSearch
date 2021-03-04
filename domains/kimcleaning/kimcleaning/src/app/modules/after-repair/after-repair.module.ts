import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterRepairRoutingModule } from './after-repair-routing.module';
import { AfterRepairComponent } from './after-repair.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {AccordionModule} from "primeng/accordion";


@NgModule({
  declarations: [AfterRepairComponent],
  imports: [
    CommonModule,
    AfterRepairRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    TableModule,
    AccordionModule
  ]
})
export class AfterRepairModule { }
