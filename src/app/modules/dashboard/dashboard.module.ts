import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RatingModule,
    TableModule,
    FormsModule,
    ProgressSpinnerModule,
    ButtonModule
  ]
})
export class DashboardModule { }
