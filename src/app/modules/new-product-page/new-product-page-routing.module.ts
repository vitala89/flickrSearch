import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProductPageComponent } from './new-product-page.component';

const routes: Routes = [{ path: '', component: NewProductPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProductPageRoutingModule { }
