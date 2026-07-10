import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/dataService';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { LoginService } from 'src/app/shared/service/loginService';
import { ToastCommonService } from 'src/app/shared/service/toastService';

@Component({
  selector: 'app-singlejobno-report',
  templateUrl: './singlejobno-report.component.html',
  styles: [`
  

.rptlblNormal {
  font-size: 10pt;
  color: black;
  font-family: Arial, Verdana;
}
.LabelHeader {
  font-weight: bold;
  font-size: x-small;
  cursor: default;
  color: 003333;
  font-family: Verdana;
}
.rptlblCmpName {
  font-weight: bold;
  font-size: 14pt;
  color: black;
  font-family: Arial, Verdana;
}
.rptlblHeader {
  font-weight: bold;
  font-size: 10pt;
  color: black;
  font-family: Arial, Verdana;
}
.rptlblCmpAdd {
  font-weight: bold;
  font-size: 8pt;
  color: black;
  font-family: Arial, Verdana;
}
  `]
})
export class SinglejobnoReportComponent implements OnInit {
  JobNo: any="";
  table0:any=[]
  table1:any=[]
  table2:any=[]
  table3:any=[]
  table4:any=[]
  table5:any=[]
  table6:any=[]
  constructor(
    private _dataService: DataService,
    private _toasterService: ToastCommonService,
    private _loaderService: LoaderService,
    private _router: Router,
    private http: HttpClient,
    private _route: ActivatedRoute,     private _loginService: LoginService,
  ) { }


  ngOnInit() {
    this._route.params.subscribe(params => {
      //  console.log(params) 
        this.JobNo=params["jobno"]    
        this.getData()  
    });
  }
  getData(){
    const jsoncmp={
      JOBNO:this.JobNo
    }
    this._dataService.getData("Accounts/ACC_RPT_JOBPROFITS_JOBWISE",jsoncmp).subscribe((data:any)=>{
        // console.log(data);
        this.table0= data.Table[0]
        this.table1= data.Table1[0]
        this.table2= data.Table2
        this.table3= data.Table3
        this.table4= data.Table4[0]
        this.table5= data.Table5
        this.table6= data.Table6
    })
  }

  PrintElem() {
    var data = document.getElementById('report-div').innerHTML;
    var mywindow = window.open('', 'Accounts -Job Profit Report Print', 'height=400,width=600');
    mywindow.document.write('<html><head><title>Accounts - Job Profit Report Print</title>');
    mywindow.document.write('<link rel="stylesheet" href="assets/css/invoice.css" type="text/css" />');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10

    mywindow.onload = function () { // necessary if the div contain images

      mywindow.focus(); // necessary for IE >= 10
      mywindow.print();
      mywindow.close();
    };
    return true;
  }

  invoiceprint(No,Type){
    let theTop = (screen.height / 2) - (483 / 2);
    let theLeft = (screen.width / 2) - (780 / 2);
    let toolbar = 'resizable=no,scrollbars=no,width=800,height=450,status=no,left=' + theLeft + ',top=' + theTop;
    

      if(Type=="II") { 
       // window.open('./#/popup/Account-Invoice-print/' + No + '/' , "Invoice Print", toolbar);
       let URL = "http://180.179.207.163/Linkserp-ac/UI/Accounts/frm_Acc_Tran_Invoice_Print.aspx?" +
       "huhpnk=" + this._loginService.getLogin()[0].GUID
       + "&citycode=" + this._loginService.getLogin()[0].CITYCODE1
       + "&Userid=" + this._loginService.getLogin()[0].CMPID
       + "&cmp_code=" + this._loginService.getLogin()[0].CMPCODE
       + "&InvoiceNo=" + No
       + "&DisplayMode=" + "0"
       +"&cmp_username=" + this._loginService.getLogin()[0].CMP_USERNAME
           window.open(URL,  "Invoice Print", toolbar);
           return false;
      }
      else if(Type=="PI")
       {       window.open('./#/popup/Account-Purchase-print/' + No.replace("'", "") + '/' + 'PI' + '/', "PI Print", toolbar);      }
       else if(Type=="JV")
      {   window.open('./#/popup/Account-JV-Print/' + No + '/' + "JV" + '/' , "JV Print", toolbar);    }
      else  if(Type=="CN")
      {  window.open('./#/popup/Account-CreditNote-Print/' + No.replace("'", "") + '/' , "CN Print", toolbar);  }
      
      else   if(Type=="SI")
      {  return false;  }
      else   if(Type=="BI")
      {  return false;   }
      else      
         window.open('./#/popup/Account-CashBook-BankReceipt-print/' + Type + '/' + No + '/' , "CASH BOOK - Bank Payment", toolbar);
     
  }
}
