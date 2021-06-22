import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/Models/company.model';
import { StockPrice } from 'src/app/Models/stock-price.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';
import { ChartType, Row } from 'angular-google-charts';


@Component({
  selector: 'app-CompareCompany',
  templateUrl: './CompareCompany.component.html',
  styleUrls: ['./CompareCompany.component.css']
})

export class CompareCompanyComponent implements OnInit {
  

  company_1_code:string;
  company_stocks:StockPrice[];

  company_2_code:string;
  company_stocks_2:StockPrice[];

  title = "" ;
  mytype = ChartType.LineChart;
  data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
  data_1 = [['0',0]];
  data_2 = [['0',0]];
  columnNames = ['Time', 'Price'];
  options = {   
    hAxis:{title:'Time'},
    vAxis:{title:'Stock Price'}, 
  };
  width = 650;
  height = 500;
 


  constructor(private service:AdminServiceService) { }

  ngOnInit() {
  }

 

  async onSubmit(form:NgForm)
  {
    await this.service.GetStocksByCode(this.company_1_code).then(response => {
      this.company_stocks = response;
      //console.log(this.company_stocks);
    });
    var i = 0;
    for(var item of this.company_stocks)
    {
      var _name = item.date;
      _name = _name.substring(0,10) + " " + item.time; 
      this.data_1.push([_name ,item.currentPrice]);
    }


    this.data_1 = Object.assign([], this.data_1);
    
    console.log(this.data_1);
    
  }

  async onSubmit_2(form2:NgForm)
  {
    await this.service.GetStocksByCode(this.company_2_code).then(response => {
      this.company_stocks_2 = response;
      //console.log(this.company_stocks);
    });
    var i = 0;
    for(var item of this.company_stocks_2)
    {
      var _name = item.date;
      _name = _name.substring(0,10) + " " + item.time; 
      this.data_2.push([_name ,item.currentPrice]);
    }


    this.data_2 = Object.assign([], this.data_2);
    
    console.log(this.data_2);
    
  }
}
