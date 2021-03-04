import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterRepairComponent } from "./after-repair.component";


const routes: Routes = [{ path: '', component: AfterRepairComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterRepairRoutingModule { }
