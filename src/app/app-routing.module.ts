import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {ProductDetailsPageComponent} from './product-details-page/product-details-page.component';
import {ContactCompletePageComponent} from './contact-complete-page/contact-complete-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: MainPageComponent},
      { path: 'contact-page', component: ContactPageComponent},
      { path: 'contact-complete-page', component: ContactCompletePageComponent},
      {path: 'product-details-page/:id', component: ProductDetailsPageComponent},
      { path: 'order-page', loadChildren: () => import('./modules/order-module/order-page.module').then(m => m.OrderPageModule) },
      // tslint:disable-next-line:max-line-length
      { path: 'new-product-page', loadChildren: () => import('./modules/new-product-page/new-product-page.module').then(m => m.NewProductPageModule) },
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      // tslint:disable-next-line:max-line-length
      { path: 'edit-product/:id/edit', loadChildren: () => import('./modules/edit-product/edit-product.module').then(m => m.EditProductModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
