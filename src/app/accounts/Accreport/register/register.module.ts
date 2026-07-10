import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { InvoiceRegisterComponent } from './invoice-register.component';
import { RegisterComponent } from './register.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { serviceTaxSupport } from './service-tax-support.component';
import { GstRegisterComponent } from './gst-register.component';
@NgModule({
  declarations: [InvoiceRegisterComponent, RegisterComponent,serviceTaxSupport,GstRegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    MyDatePickerModule,
    NgSelectModule,
    SharedModule
  ]
})
export class RegisterModule { }
