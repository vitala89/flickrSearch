import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommerceCleaningComponent} from "./commerce-cleaning.component";

const routes: Routes = [{path:'', component: CommerceCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceCleaningRoutingModule { }
