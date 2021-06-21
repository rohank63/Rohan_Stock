import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/Models/company.model';
import { StockPrice } from 'src/app/Models/stock-price.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';
import { 
	IgxCategoryChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";

@Component({
  selector: 'app-CompareCompany',
  templateUrl: './CompareCompany.component.html',
  styleUrls: ['./CompareCompany.component.css']
})
export class CompareCompanyComponent implements OnInit {
  company_1_code:string;
  company_stocks:StockPrice[];

  constructor(private service:AdminServiceService) { }

  ngOnInit() {
  }

  async onSubmit(form:NgForm)
  {
    await this.service.GetStocksByCode(this.company_1_code).then(response => {
      this.company_stocks = response;
      console.log(this.company_stocks);
    });

    console.log(this.company_stocks);
  }
}
