import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopCleaningRoutingModule } from './shop-cleaning-routing.module';
import { ShopCleaningComponent } from './shop-cleaning.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";


@NgModule({
  declarations: [ShopCleaningComponent],
  imports: [
    CommonModule,
    ShopCleaningRoutingModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    BreadcrumbModule
  ]
})
export class ShopCleaningModule { }
