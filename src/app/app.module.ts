import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
// tslint:disable-next-line:import-spacing
import { HttpClientModule }   from '@angular/common/http';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactCompletePageComponent } from './contact-complete-page/contact-complete-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SafePipe } from './pipes/safe.pipe';
import { SanitizeHtmlDirective } from './directives/sanitize-html.directive';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {MultiSelectModule} from 'primeng/multiselect';
import {GalleriaModule} from 'primeng/galleria';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ContactPageComponent,
    TruncateTextPipe,
    ProductDetailsPageComponent,
    ContactCompletePageComponent,
    SafePipe,
    SanitizeHtmlDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxGalleryModule,
    ButtonModule,
    RatingModule,
    TableModule,
    GalleriaModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMivhlVwUYABUhFPcORMuYULsQNPg3s8w'
    }),
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    InputSwitchModule,
    CalendarModule,
    InputNumberModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
