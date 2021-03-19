import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {ImageListComponent} from "./image-list/image-list.component";
import {BookmarksComponent} from "./bookmarks/bookmarks.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: ImageListComponent},
      {path: 'bookmarks', component: BookmarksComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
