import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductPageRoutingModule } from './new-product-page-routing.module';
import { NewProductPageComponent } from './new-product-page.component';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [NewProductPageComponent],
  imports: [
    CommonModule,
    NewProductPageRoutingModule,
    FileUploadModule,
    ToastModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    MultiSelectModule,
    InputSwitchModule,
    CalendarModule,
  ]
})
export class NewProductPageModule { }
