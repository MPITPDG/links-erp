import { Component, OnInit,OnChanges } from '@angular/core';
import{DataService} from '../../../shared/service/dataService';
import { LoginService } from '../../../shared/service/loginService';
import { ToastCommonService } from '../../../shared/service/toastService';
import { LoaderService } from '../../../shared/service/loader.service'; 
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'app-BankReconcil',
    templateUrl: './bank-reconcil.component.html',
    styleUrls: ['./bank-reconcil.component.css']
  })
  export class BankReconcilComponent implements OnInit {
    public myDatePickerOptions: IMyDpOptions = {
         dateFormat: 'dd/mm/yyyy',
        inline: false,
        height: '30px',
        width: '120px',
        componentDisabled: false,
        selectionTxtFontSize: '12px',
        editableDateField: false,
        sunHighlight: true,
        satHighlight: true,
        firstDayOfWeek: 'su',
        openSelectorTopOfInput: false,
        openSelectorOnInputClick: true,
        selectorHeight: '200px',
        selectorWidth: '220px',
         alignSelectorRight: true,
          
         
      };
      public myDatePickerOptionsFilter: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        inline: false,
        height: '34px',
        width: '140px',
        componentDisabled: false,
        selectionTxtFontSize: '12px',
        editableDateField: false,
        sunHighlight: true,
        satHighlight: true,
        firstDayOfWeek: 'su',
        openSelectorTopOfInput: false,
        openSelectorOnInputClick: true,
        selectorHeight: '220px',
        selectorWidth: '240px'
       
      };
      public myDatePickerOptionsBank: IMyDpOptions = {
        dateFormat: 'dd-mmm-yyyy',
       inline: false,
       height: '16px',
       width: '140px',
       componentDisabled: false,
       selectionTxtFontSize: '12px',
       editableDateField: false,
       sunHighlight: true,
       satHighlight: true,
       firstDayOfWeek: 'su',
       openSelectorTopOfInput: false,
       openSelectorOnInputClick: true,
       selectorHeight: '180px',
       selectorWidth: '200px'
        
     };
    FromDate;
    ToDate;
    ClearingDate;
    
    bankreconcilList:any = [];
    BankList:any = [];
    displayType: string = 'SEARCH';
    Bank:string;
    BankName:string;
    Header:string="Bank Reconciliation";
    searched:boolean = false;
    typeFilter:string = '';
    globalSearch: string = '';
    reconsillationstr:string="";
    reconsillationstr1:string="";
    OpBalDr:string;
    OpBalCr:string;
    BalanceDr:string;
    BalanceCr:string;
    DrNotRef:string;
    CrNotRef:string;
    DrRef:string;
    CrRef:string;
    showResult = false;
     constructor(private _dataService: DataService,
        private _toasterService: ToastCommonService,
        private loaderService: LoaderService,
        private http: HttpClient, 
        private _activatedRoute: ActivatedRoute,private _router:Router,
        private _loginService: LoginService,
        private _loaderService: LoaderService,
      
      ) { }
    //   ngOnChanges() {
    //     for (let data of this.bankreconcilList) {
    //       data["clearanceDatenew"] = (data["clearanceDatenew"] != "") ? this._dataService.stringdttoArry(data["clearanceDatenew"]) : null;
    //   }
    // }
        
      ngOnInit() { 
          this._loaderService.display(true)
          this.FillAccount()
          this.verifyPermission('45','View') 
          this._loaderService.display(false)
        }

        get filteredBankreconcilList() {
          let list = this.bankreconcilList || [];
          if (this.typeFilter) {
            list = list.filter(x => x.STATUS === this.typeFilter);
          }
          if (this.globalSearch && this.globalSearch.trim() !== '') {
            const q = this.globalSearch.toLowerCase();
            list = list.filter(x =>
              ((x.ENTRYNO || '') + '').toLowerCase().includes(q) ||
              ((x.PARTYNAME || '') + '').toLowerCase().includes(q) ||
              ((x.CHEQUENO || '') + '').toLowerCase().includes(q) ||
              ((x.STATUS || '') + '').toLowerCase().includes(q)
            );
          }
          return list;
        }

        get selectedCount(): number {
          return (this.filteredBankreconcilList || []).filter(x => x._selected).length;
        }

        get differenceLabel(): string {
          const book = this.toNumber(this.BalanceDr) - this.toNumber(this.BalanceCr);
          const bank = this.toNumber(this.DrRef) - this.toNumber(this.CrRef);
          const diff = book - bank;
          if (diff === 0) {
            return '0.00';
          }
          return Math.abs(diff).toFixed(2) + (diff > 0 ? ' Dr' : ' Cr');
        }

        get isDifferenceZero(): boolean {
          return this.differenceLabel === '0.00';
        }

        private toNumber(val: any): number {
          if (!val) { return 0; }
          const n = parseFloat((val + '').replace(/[^0-9.\-]/g, ''));
          return isNaN(n) ? 0 : n;
        }
        
        verifyPermission(formId: any, userMode: any) {
          this._loaderService.display(true);
          this._loginService.verifyRights(formId, '')
          .subscribe((data: any) => {          
          this._loginService.checkVerify(userMode, data);
          this._loaderService.display(false);
                });
            } 

        FillAccount(){
          const jsonBank= {
          cmpcode: this._loginService.getLogin()[0].CMPCODE,
          citycode: this._loginService.getLogin()[0].CITYCODE,
          citycode1: this._loginService.getLogin()[0].CITYCODE1
          }
          this._dataService.getData("Accounts/Acc_CashBook_FillOurbank", jsonBank)
          .subscribe((data: any) => {
          const rawList = (data && data.Table) ? data.Table : [];
          this.BankList = rawList.map(item => ({
            ...item,
            acctname: item.acctname || item.ACCTNAME || '',
            acctcodename: item.acctcodename || item.ACCTCODENAME || ''
          }));
          this._loaderService.display(false)
          })
          } 
              
              SearchData()
              {
                this.searched = true;
                this.loaderService.display(true);
                if(this.Bank=="" || this.Bank==undefined || this.Bank=="--Select OurBank--"){
                  this._toasterService.toast('warning', 'warning', 'Please select Our Bank  !');
                  this.loaderService.display(false);
                  return false;
               }
               if (this.FromDate == "" || this.FromDate == undefined) { 
                this._toasterService.toast('warning', 'warning', "From Date cannot be blank !.");
                this.loaderService.display(false);
                return false;
               }
              if (this.ToDate == "" || this.ToDate == undefined) { 
                this._toasterService.toast('warning', 'warning', "To Date cannot be blank !.");
                this.loaderService.display(false);
                return false; }
                const jsonData = {
                    _ourbank:(this.Bank==undefined)?"" :this.Bank,
                    _FromDt:this.FromDate,
                    _ToDt:this.ToDate,
                    cmpcode:this._loginService.getLogin()[0].CMPCODE,
                    citycode:this._loginService.getLogin()[0].CITYCODE,
                    citycode1:this._loginService.getLogin()[0].CITYCODE1,
                    Fin_StartDate:this._loginService.getLogin()[0].FINANCIAL_YEAR.STARTDATE,
                    Fin_EndDate:this._loginService.getLogin()[0].FINANCIAL_YEAR.ENDDATE
                 }
                 this._dataService.getData("Accounts/Acc_CashBook_BankRecousillation", jsonData)
                 .subscribe((data: any) => {
                  this.bankreconcilList=data.Table;
                  for (let data of this.bankreconcilList) {
                    data["CLEARANCEDATE"] = (data["CLEARANCEDATE"] != "") ? this._dataService.stringdttoArry(data["CLEARANCEDATE"]) : null;
                    data["_selected"] = false;
                    // console.log(this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(data["clearanceDate"]));
                    // data["clearanceDate"]=this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(data["clearanceDate"]);
                }
                  if(data.Table1[0].BALANCE >0) {
                    this.BalanceDr=data.Table1[0].BALANCE  + " Dr";
                  }
                  else{
                    this.BalanceCr=(data.Table1[0].BALANCE=="0.00")?"" :Math.abs(data.Table1[0].BALANCE) + " Cr";
                    }
                  if(data.Table2[0].CRAMTNOTREFLECTED >0)
                    {
                       this.CrNotRef=(data.Table2[0].CRAMTNOTREFLECTED=="0.00")?"" :Math.abs(data.Table2[0].CRAMTNOTREFLECTED) + " Cr";
                    }
                  if(data.Table2[0].DRAMTNOTREFLECTED >0)
                    {
                      this.DrNotRef=(data.Table2[0].DRAMTNOTREFLECTED=="0.00")?"" :Math.abs(data.Table2[0].DRAMTNOTREFLECTED) + " Dr";
                    }
                  if(data.Table3[0].AMTREFLECTED >0)
                      {
                         this.DrRef=data.Table3[0].AMTREFLECTED  + " Dr";
                      }
                  else
                      {
                        this.CrRef=(data.Table3[0].AMTREFLECTED=="0.00")?"" :Math.abs(data.Table3[0].AMTREFLECTED) + " Cr";
                      }
                       if(data.Table4[0].OPENINGBALANCE >0)
                      {
                         this.OpBalDr=data.Table4[0].OPENINGBALANCE  + " Dr";
                      }
                  else
                      {
                        this.OpBalCr=(data.Table4[0].OPENINGBALANCE=="0.00")?"" :Math.abs(data.Table4[0].OPENINGBALANCE) + " Cr";
                      }
                  });
                  this.showResult = true;
                  this.loaderService.display(false);
                } 
                FromDateChanged(ev){
                  this.FromDate=ev.formatted
                  }
                ToDateChanged(ev){
                  this.ToDate=ev.formatted
                  }
              
                BankRecUpdateold(){
                  this.loaderService.display(true);
                  this.reconsillationstr='';
                    for (var i = 0; i < this.bankreconcilList.length; i++) 
                   {
                    this.ClearingDate=(this.bankreconcilList[i].CLEARANCEDATE) ?this.bankreconcilList[i].CLEARANCEDATE : "",
                    this.reconsillationstr +=  (" UPDATE acc_bank set clearanceDate = " 
                + (( (this.ClearingDate == "") ? "NULL" : (" '"  + (this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(this.ClearingDate.formatted )+ "' ")) ) + (" where ID = '" 
                + (this.bankreconcilList[i].ID + "'")))) + ";";
                    }
                    
                    const jsonData = {
                      _reconsillationstr:this.reconsillationstr ,
                   
                   }
                    this._dataService.getData("Accounts/Acc_CashBook_BankRecousillation_Update",  jsonData )
                   .subscribe((data: any) => {
                  if (data.Table[0].STATUS == "100") {
                    this._toasterService.toast('info', 'Complete', "Bank Reconcillation saved successfully");
                    this.SearchData();
                    this.loaderService.display(false);
                                   }            
                  else { 
                   this._toasterService.toast("warning","warning" ,"Error in saving data "  );
                   this.loaderService.display(false);
                  }
                });
                }
                BankRecUpdate_20260525() {

  // ✅ VALIDATION 1 — Check if any rows are selected
  const selectedRows = this.bankreconcilList.filter(r => r._selected);
  if (selectedRows.length === 0) {
    this._toasterService.toast('warning', 'Warning',
      'Please select at least one transaction to reconcile.');
    return;
  }

  // ✅ VALIDATION 2 — Check if selected rows have clearance date
  const selectedWithoutDate = selectedRows.filter(r =>
    !r.CLEARANCEDATE || !r.CLEARANCEDATE.formatted
  );
  if (selectedWithoutDate.length > 0) {
    this._toasterService.toast('warning', 'Warning',
      `${selectedWithoutDate.length} selected transaction(s) have no clearance date. 
       Please enter clearance date for all selected rows.`);
    return;
  }

  // ✅ CONFIRMATION before submit
  if (!confirm(`Submit reconciliation for ${selectedRows.length} transaction(s)?`)) {
    return;
  }

  this.loaderService.display(true);
  this.reconsillationstr = '';

  // ✅ Loop only selected rows, use local variable
  for (let i = 0; i < this.bankreconcilList.length; i++) {
    const row = this.bankreconcilList[i];

    // ✅ Local variable — not class property
    const clearingDate = (row.CLEARANCEDATE && row.CLEARANCEDATE.formatted)
      ? row.CLEARANCEDATE.formatted
      : '';

    const dateVal = (clearingDate === '')
      ? 'NULL'
      : `'${this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(clearingDate)}'`;

    this.reconsillationstr +=
      `UPDATE acc_bank SET clearanceDate = ${dateVal} WHERE ID = '${row.ID}';`;
  }

  const jsonData = {
    _reconsillationstr: this.reconsillationstr
  };

  this._dataService.getData(
    'Accounts/Acc_CashBook_BankRecousillation_Update',
    jsonData
  ).subscribe(
    (data: any) => {
      this.loaderService.display(false);
      if (data.Table[0].STATUS === '100') {
        this._toasterService.toast('info', 'Success',
          'Bank Reconciliation saved successfully.');
        this.SearchData();
      } else {
        this._toasterService.toast('warning', 'Warning',
          'Error in saving data.');
      }
    },
    (error) => {
      // ✅ Handle API error
      this.loaderService.display(false);
      this._toasterService.toast('error', 'Error',
        'Something went wrong. Please try again.');
      console.error('BankRecUpdate error:', error);
    }
  );
}
BankRecUpdatewithstring() {

  // ✅ 1. Get Selected Rows
  const selectedRows = this.bankreconcilList.filter(r => r._selected);
  
  if (selectedRows.length === 0) {
    this._toasterService.toast('warning', 'Warning',
      'Please select at least one transaction to reconcile.');
    return;
  }

  // ✅ 2. VALIDATION: Check if selected rows are missing a clearance date
  const selectedWithoutDate = selectedRows.filter(r =>
    !r.CLEARANCEDATE || !r.CLEARANCEDATE.formatted
  );
  
  if (selectedWithoutDate.length > 0) {
    this._toasterService.toast('warning', 'Warning',
      `You selected ${selectedWithoutDate.length} transaction(s) without a clearance date. Please enter dates for all selected rows.`);
    return;
  }

  // ✅ 3. NEW VALIDATION: Check if user entered a date but forgot the checkbox!
  const unselectedWithDate = this.bankreconcilList.filter(r =>
    !r._selected && r.CLEARANCEDATE && r.CLEARANCEDATE.formatted
  );
  
  if (unselectedWithDate.length > 0) {
    this._toasterService.toast('warning', 'Warning',
      `You entered a clearance date for ${unselectedWithDate.length} row(s) but forgot to tick the Match checkbox. Please select them.`);
    return;
  }

  // ✅ 4. CONFIRMATION
  if (!confirm(`Are you sure you want to submit reconciliation for ${selectedRows.length} transaction(s)?`)) {
    return;
  }

  this.loaderService.display(true);
  this.reconsillationstr = '';

  // ✅ 5. BUG FIX: Loop ONLY through selectedRows! (Not the whole list)
  for (let i = 0; i < selectedRows.length; i++) {
    const row = selectedRows[i];

    // Since we validated above, we know formatting exists
    const clearingDate = row.CLEARANCEDATE.formatted;
    const dateVal = `'${this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(clearingDate)}'`;

    this.reconsillationstr +=
      `UPDATE acc_bank SET clearanceDate = ${dateVal} WHERE ID = '${row.ID}'; `;
  }

  const jsonData = {
    _reconsillationstr: this.reconsillationstr
  };

  this._dataService.getData(
    'Accounts/Acc_CashBook_BankRecousillation_Update',
    jsonData
  ).subscribe(
    (data: any) => {
      this.loaderService.display(false);
      if (data.Table[0].STATUS === '100') {
        this._toasterService.toast('success', 'Success',
          'Bank Reconciliation saved successfully.');
        this.SearchData(); // Refresh the grid
      } else {
        this._toasterService.toast('warning', 'Warning',
          'Error in saving data.');
      }
    },
    (error) => {
      this.loaderService.display(false);
      this._toasterService.toast('error', 'Error',
        'Something went wrong. Please try again.');
      console.error('BankRecUpdate error:', error);
    }
  );
}
BankRecUpdate() {

  // ✅ VALIDATION 1: Get Selected Rows
  const selectedRows = this.bankreconcilList.filter(r => r._selected);
  
  if (selectedRows.length === 0) {
    this._toasterService.toast('warning', 'Warning',
      'Please select at least one transaction to reconcile.');
    return;
  }

  // ✅ VALIDATION 2: Check if selected rows are missing a clearance date
  const selectedWithoutDate = selectedRows.filter(r =>
    !r.CLEARANCEDATE || !r.CLEARANCEDATE.formatted
  );
  
  if (selectedWithoutDate.length > 0) {
    this._toasterService.toast('warning', 'Warning',
      `You selected ${selectedWithoutDate.length} transaction(s) without a clearance date. Please enter dates for all selected rows.`);
    return;
  }

  // ✅ VALIDATION 3: Check if user entered a date but forgot the checkbox
  const unselectedWithDate = this.bankreconcilList.filter(r =>
    !r._selected && r.CLEARANCEDATE && r.CLEARANCEDATE.formatted
  );
  
  if (unselectedWithDate.length > 0) {
    this._toasterService.toast('warning', 'Warning',
      `You entered a clearance date for ${unselectedWithDate.length} row(s) but forgot to tick the Match checkbox. Please select them.`);
    return;
  }

  // ✅ CONFIRMATION DIALOG
  if (!confirm(`Are you sure you want to submit reconciliation for ${selectedRows.length} transaction(s)?`)) {
    return;
  }

  this.loaderService.display(true);
  
  // ✅ BUILD XML STRING (For SQL Server 2008 Bulk Update)
  this.reconsillationstr = '<root>';

  for (let i = 0; i < selectedRows.length; i++) {
    const row = selectedRows[i];

    // Format the date using your existing data service
    const clearingDate = row.CLEARANCEDATE.formatted;
    const dateVal = this._dataService.convertFromdd_mm_yyyTodd_mmm_yyy(clearingDate);

    // Append XML node for each row
    this.reconsillationstr += `<row id="${row.ID}" date="${dateVal}" />`;
  }

  // Close the XML string
  this.reconsillationstr += '</root>';

  // Prepare payload for API
  const jsonData = {
    _reconsillationstr: this.reconsillationstr
  };

  // ✅ CALL THE API
  this._dataService.Common(
    'Accounts/Acc_CashBook_BankRecousillation_Update_NG',
    jsonData
  ).subscribe(
    (data: any) => {
      this.loaderService.display(false);
      
      // Safely check if the API returned our '100' status from the Stored Procedure
      if (data && data.Table && data.Table.length > 0 && data.Table[0].STATUS === '100') {
        
        this._toasterService.toast('success', 'Success', data.Table[0].MESSAGE || 'Bank Reconciliation saved successfully.');
        
        // Refresh the grid
        this.SearchData(); 
        
      } else {
        // If SQL Server returned '500' (Error) from the CATCH block
        const errorMsg = (data && data.Table && data.Table[0] && data.Table[0].MESSAGE) 
            ? data.Table[0].MESSAGE 
            : 'Error in saving data.';
            
        this._toasterService.toast('warning', 'Warning', errorMsg);
      }
    },
    (error) => {
      this.loaderService.display(false);
      this._toasterService.toast('error', 'Error', 'Something went wrong. Please try again.');
      console.error('BankRecUpdate error:', error);
    }
  );
}
                Reset()
                { 
                    this.searched = false;
                    this.typeFilter = '';
                    this.globalSearch = '';
                    this.Bank = "";
                    this.FromDate="";
                    this.ToDate="";
                    this.bankreconcilList=[];
                    this.BalanceCr="";
                    this.BalanceDr="";
                    this.CrNotRef="";
                    this.DrNotRef="";
                    this.DrRef="";
                    this.CrRef="";
                }
                BackToSearch() {
  this.showResult = false;
}
autoCheckRow(event: any, row: any) {
  if (event && event.formatted) {
    row._selected = true; // Auto-check if date is selected
  } else {
    row._selected = false; // Uncheck if date is cleared
  }
}

    }