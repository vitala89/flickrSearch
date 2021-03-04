import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {BadgeModule} from "primeng/badge";


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    BreadcrumbModule,
    BadgeModule
  ]
})
export class AboutUsModule { }
