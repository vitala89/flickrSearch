import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WindowsCleaningComponent } from "./windows-cleaning.component";

const routes: Routes = [{ path: '', component: WindowsCleaningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowsCleaningRoutingModule { }
