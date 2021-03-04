import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowsCleaningRoutingModule } from './windows-cleaning-routing.module';
import { WindowsCleaningComponent } from './windows-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [WindowsCleaningComponent],
  imports: [
    CommonModule,
    WindowsCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class WindowsCleaningModule { }
