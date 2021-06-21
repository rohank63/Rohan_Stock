import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/Models/company.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';

@Component({
  selector: 'app-EditCompany',
  templateUrl: './EditCompany.component.html',
  styleUrls: ['./EditCompany.component.css']
})
export class EditCompanyComponent implements OnInit {

  temp_company:Company = this.service.temp_company;
  new_company:Company;

  companyCode:string = this.temp_company.companyCode;
  companyName:string = this.temp_company.companyName;
  ceo:string = this.temp_company.ceo;
  turnOver:string = this.temp_company.turnOver;
  board:string = this.temp_company.board;
  stockCode:string = this.temp_company.stockCode;
  writeUp:string = this.temp_company.writeup;
  stockExchangeName:string = this.temp_company.stockExchangeName;
  sectorName:string = this.temp_company.sectorName;

  constructor(private service:AdminServiceService,private toastr:ToastrService) { }

  ngOnInit() {
  }

  Update(form:NgForm)
  {
    this.new_company = {
      companyCode :this.companyCode,
      companyName : this.companyName,
      ceo : this.ceo,
      turnOver : this.turnOver,
      board : this.board,
      stockCode : this.stockCode,
      writeup : this.writeUp,
      stockExchangeName : this.stockExchangeName,
      sectorName : this.sectorName
      }

    this.service.UpdateCompany(this.new_company).subscribe(i => {
      console.log(i)
      this.toastr.success("Comapny Updated Successfully")
    });
  }
}
