import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MyDatePickerModule } from 'mydatepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { uploadbankreconcilRoutingModule} from './uploadbankreconcil.routing'
import { HttpClientModule } from '@angular/common/http';
import { UploadBankReconcil } from './bank-reconcil-uploadstatement.component';
import {UploadBankReconcilSearch} from './bank-reconcil-uploadsearch.component'
@NgModule({

    imports: [uploadbankreconcilRoutingModule,
        FormsModule,
        CommonModule,
        TabsModule.forRoot(),
        MyDatePickerModule,
        NgSelectModule,
        HttpClientModule
        //SharedModule
    ],
    declarations: [UploadBankReconcil,UploadBankReconcilSearch

    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class uploadbankreconcilModule { }