import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import {PanelModule} from "primeng/panel";
import {AccordionModule} from "primeng/accordion";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {CarouselModule} from "primeng/carousel";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/productservice";
import {DividerModule} from "primeng/divider";
import {TabViewModule} from "primeng/tabview";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    SharedModule,
    PanelModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    HttpClientModule,
    DividerModule,
    TabViewModule,
    BrowserAnimationsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
