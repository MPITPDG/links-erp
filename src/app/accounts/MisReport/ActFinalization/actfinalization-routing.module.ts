import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientwiseIncomeComponent } from './clientwiseincome.component';
import { ClientSupplierActWiseList } from './clientsuppactwiseList.component';
import { GenActStatementAllBranch } from './genactstmt.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Account Finalization'
    },
    children: [
        { path:':Mode', component: ClientwiseIncomeComponent, data: { title: '' } },
        { path:'act/CSList', component: ClientSupplierActWiseList, data: { title: 'ActwiseList' } },
        { path:'act/GenActAllBrach', component: GenActStatementAllBranch, data: { title: 'General ActStatement' } }
     ],
     
     
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActFinalizationRoutingModule { }
