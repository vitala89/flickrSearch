import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalCleaningComponent} from "./medical-cleaning.component";

const routes: Routes = [{path:'', component: MedicalCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalCleaningRoutingModule { }
