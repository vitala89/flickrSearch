import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpringCleaningComponent} from "./spring-cleaning.component";

const routes: Routes = [{ path: '', component: SpringCleaningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpringCleaningRoutingModule { }
