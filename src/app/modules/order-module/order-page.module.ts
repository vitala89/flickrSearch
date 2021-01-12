import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageRoutingModule } from './order-page-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormatTitlePipe} from '../../pipes/format-title.pipe';
import { OrderCompletePageComponent } from './order-complete-page/order-complete-page.component';


@NgModule({
  declarations: [
    OrderPageComponent,
    FormatTitlePipe,
    OrderCompletePageComponent,
  ],
  imports: [
    CommonModule,
    OrderPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OrderPageModule { }
