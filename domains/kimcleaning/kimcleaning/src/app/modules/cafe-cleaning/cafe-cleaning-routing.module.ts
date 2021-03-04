import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CafeCleaningComponent} from "./cafe-cleaning.component";

const routes: Routes = [{path:'', component:CafeCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeCleaningRoutingModule { }
