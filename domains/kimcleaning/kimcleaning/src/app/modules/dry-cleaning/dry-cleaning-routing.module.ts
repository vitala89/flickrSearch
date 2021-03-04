import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DryCleaningComponent} from "./dry-cleaning.component";

const routes: Routes = [{path: '', component: DryCleaningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DryCleaningRoutingModule { }
