import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: MainPageComponent},
      { path: 'spring-cleaning', loadChildren: () => import('./modules/spring-cleaning/spring-cleaning.module').then(m => m.SpringCleaningModule) },
      { path: 'after-repair', loadChildren: () => import('./modules/after-repair/after-repair.module').then(m => m.AfterRepairModule) },
      { path: 'windows-cleaning', loadChildren: () => import('./modules/windows-cleaning/windows-cleaning.module').then(m => m.WindowsCleaningModule) },
      { path: 'dry-cleaning', loadChildren: () => import('./modules/dry-cleaning/dry-cleaning.module').then(m => m.DryCleaningModule) },
      { path: 'apart-cleaning', loadChildren: () => import('./modules/apart-cleaning/apart-cleaning.module').then(m => m.ApartCleaningModule) },
      { path: 'house-cleaning', loadChildren: () => import('./modules/house-cleaning/house-cleaning.module').then(m => m.HouseCleaningModule) },
      { path: 'office-cleaning', loadChildren: () => import('./modules/office-cleaning/office-cleaning.module').then(m => m.OfficeCleaningModule) },
      { path: 'commerce-cleaning', loadChildren: () => import('./modules/commerce-cleaning/commerce-cleaning.module').then(m => m.CommerceCleaningModule) },
      { path: 'dishwashing', loadChildren: () => import('./modules/dishwashing/dishwashing.module').then(m => m.DishwashingModule) },
      { path: 'shop-cleaning', loadChildren: () => import('./modules/shop-cleaning/shop-cleaning.module').then(m => m.ShopCleaningModule) },
      { path: 'medical-cleaning', loadChildren: () => import('./modules/medical-cleaning/medical-cleaning.module').then(m => m.MedicalCleaningModule) },
      { path: 'school-cleaning', loadChildren: () => import('./modules/school-cleaning/school-cleaning.module').then(m => m.SchoolCleaningModule) },
      { path: 'cafe-cleaning', loadChildren: () => import('./modules/cafe-cleaning/cafe-cleaning.module').then(m => m.CafeCleaningModule) },
      { path: 'price-list', loadChildren: () => import('./modules/price-list/price-list.module').then(m => m.PriceListModule) },
      { path: 'about-us', loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule) },
      { path: 'privacy-policy', loadChildren: () => import('./modules/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
      { path: 'contacts', loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule) },
      { path: 'order-page', loadChildren: () => import('./modules/order-page/order-page.module').then(m => m.OrderPageModule) }
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
