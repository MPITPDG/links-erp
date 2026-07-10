import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceRegisterComponent } from './invoice-register.component';
import { serviceTaxSupport } from './service-tax-support.component';
import { GstRegisterComponent } from './gst-register.component';
const routes: Routes = [
  {
      path: '',
      data: {
          title: 'Register'
      },
      children: [
          
           { path: 'Regi/:PageType', component: InvoiceRegisterComponent, data: { title: 'Add' } },
           { path: 'ServiceTaxRegistersupport', component: serviceTaxSupport, data: { title: 'Report' } },
           { path: 'gst', component: GstRegisterComponent, data: { title: 'Add' } },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
