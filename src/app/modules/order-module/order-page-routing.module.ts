import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPageComponent } from './order-page/order-page.component';
import {OrderCompletePageComponent} from './order-complete-page/order-complete-page.component';

const routes: Routes = [
  { path: '', component: OrderPageComponent },
  { path: 'order-complete-page', component: OrderCompletePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPageRoutingModule { }
