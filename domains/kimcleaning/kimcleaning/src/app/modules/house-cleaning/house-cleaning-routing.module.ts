import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HouseCleaningComponent} from "./house-cleaning.component";

const routes: Routes = [{path:'', component:HouseCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseCleaningRoutingModule { }
