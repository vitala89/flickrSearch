import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopCleaningComponent} from "./shop-cleaning.component";

const routes: Routes = [{path:'', component:ShopCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopCleaningRoutingModule { }
