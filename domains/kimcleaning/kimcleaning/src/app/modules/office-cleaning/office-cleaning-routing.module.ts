import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfficeCleaningComponent} from "./office-cleaning.component";

const routes: Routes = [{path:'', component:OfficeCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeCleaningRoutingModule { }
