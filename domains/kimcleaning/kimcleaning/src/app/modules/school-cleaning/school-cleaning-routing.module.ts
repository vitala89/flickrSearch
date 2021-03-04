import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolCleaningComponent} from "./school-cleaning.component";

const routes: Routes = [{path:'', component:SchoolCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolCleaningRoutingModule { }
