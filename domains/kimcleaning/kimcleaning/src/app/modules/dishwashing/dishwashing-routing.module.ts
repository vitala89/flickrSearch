import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishwashingComponent} from "./dishwashing.component";

const routes: Routes = [{path:'', component:DishwashingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishwashingRoutingModule { }
