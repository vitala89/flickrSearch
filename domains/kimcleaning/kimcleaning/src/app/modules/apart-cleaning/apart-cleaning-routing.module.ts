import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApartCleaningComponent} from "./apart-cleaning.component";

const routes: Routes = [{path:'', component:ApartCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartCleaningRoutingModule { }
