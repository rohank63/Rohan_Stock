import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/Models/company.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-NewCompany',
  templateUrl: './NewCompany.component.html',
  styleUrls: ['./NewCompany.component.css']
})
export class NewCompanyComponent implements OnInit {
  new_company:Company;
  companyCode:string;
  companyName:string;
  ceo:string;
  turnOver:string;
  board:string;
  stockCode:string;
  writeUp:string;
  stockExchangeName:string;
  sectorName:string;
  constructor(private service:AdminServiceService, private toastr:ToastrService) { }

  ngOnInit() {
  }

  addnew(form:NgForm)
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

    this.service.AddCompany(this.new_company).subscribe(i => {
      console.log(i)
      this.toastr.success("Comapny Submitted Successfully")
    });

  }

}
