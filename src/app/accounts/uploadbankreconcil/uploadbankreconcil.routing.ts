import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadBankReconcil } from './bank-reconcil-uploadstatement.component';
import {UploadBankReconcilSearch} from './bank-reconcil-uploadsearch.component'
const routes: Routes = [
    {
        path: '',
        data: {
            title: ' Bank Reconcil'
        },
        children: [

                { path:'uploadStatement', component: UploadBankReconcil, data: { title: 'Upload Statement' } },
                { path:'uploadStatementsearch', component: UploadBankReconcilSearch, data: { title: 'Upload Statement Search' } },




        ]
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class uploadbankreconcilRoutingModule { }
