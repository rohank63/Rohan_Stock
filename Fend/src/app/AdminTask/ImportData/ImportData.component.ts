import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StockPrice } from 'src/app/Models/stock-price.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';

import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ImportData',
  templateUrl: './ImportData.component.html',
  styleUrls: ['./ImportData.component.css']
})
export class ImportDataComponent implements OnInit {

  new_stock_price:StockPrice;
  stock_list:StockPrice[] = [];
  aa:any;
  companyCode:string;

  file: any = null;
  file_path :string;

  spinnerEnabled = false;
  keys: string[];
  dataSheet:any = new Subject();
  @ViewChild('inputFile') inputFile: ElementRef;
  isExcelFile: boolean;

  constructor(private service: AdminServiceService, private toastr: ToastrService) {}

  ngOnInit() {
  }

  onChange(event) {
    
    
    let data, header;
    const target: DataTransfer = <DataTransfer>(event.target);
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = '';
    }
    if (this.isExcelFile) {

      this.toastr.success("File Uploaded Successfully");

      this.spinnerEnabled = true;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        data = XLSX.utils.sheet_to_json(ws);
      };

      reader.readAsBinaryString(target.files[0]);

      

      reader.onloadend = (e) => {
        this.spinnerEnabled = false;
        this.keys = Object.keys(data[0]);

        

        for(let row of data)
        {
          this.aa = row[this.keys[0]];
          this.companyCode = this.aa.toString();

          this.new_stock_price = {
          companyCode : this.companyCode,
          stockExchangeName : row[this.keys[1]],
          currentPrice : row[this.keys[2]],
          date : row[this.keys[3]],
          time : row[this.keys[4]],
          }

          //console.log(this.new_stock_price);

          this.stock_list.push(this.new_stock_price);
        }

        console.log("R");
        console.log(this.stock_list);
      


        this.dataSheet.next(data)
      }

    } 
    else {
      this.inputFile.nativeElement.value = '';
    }

}

// OnClick of button Upload
  onUpload() {
      
    this.service.UploadData(this.stock_list).subscribe(i => {
      console.log(i)
      this.toastr.success("Uploaded Data")
    });
  }

  removeData(){
    this.inputFile.nativeElement.value = '';
    this.dataSheet.next(null);
    this.keys = null;
  }
}
