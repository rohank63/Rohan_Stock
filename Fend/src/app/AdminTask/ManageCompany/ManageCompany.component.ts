import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/company.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ManageCompany',
  templateUrl: './ManageCompany.component.html',
  styleUrls: ['./ManageCompany.component.css']
})
export class ManageCompanyComponent implements OnInit {
  companylist:Company[] ;
  searchText;

  constructor(private service: AdminServiceService, private toastr:ToastrService) { 
    this.service.GetAll().subscribe(response => {
      this.companylist = response
    });
  }

  ngOnInit() {
    
  }

  DeleteC(code:string)
  {
    this.service.DeleteCompany(code).subscribe(i => {
      console.log(i);
      this.toastr.success("Deleted");
    });
    
  }

  StoreCompany(item:Company)
  {
    this.service.CompanyDetails(item);
  }
  
}
