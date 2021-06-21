import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPO } from 'src/app/Models/ipo.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';

@Component({
  selector: 'app-EditIPO',
  templateUrl: './EditIPO.component.html',
  styleUrls: ['./EditIPO.component.css']
})
export class EditIPOComponent implements OnInit {

  temp_ipo = this.service.temp_ipo;
  new_ipo:IPO;
  
  companyName:string = this.temp_ipo.companyName;
  stockExchangeName:string = this.temp_ipo.stockExchangeName;
  pricePerShare:number = this.temp_ipo.pricePerShare;
  totalShares:number = this.temp_ipo.totalShares;
  openDateTime:string = this.temp_ipo.openDateTime;
  remarks:string = this.temp_ipo.remarks;
  

  constructor(private service:AdminServiceService, private toastr:ToastrService) { }

  ngOnInit() {
  }

  Update(form:NgForm)
  {
    this.new_ipo = {
      companyName : this.companyName,
      stockExchangeName :this.stockExchangeName,
      pricePerShare : this.pricePerShare,
      totalShares:this.totalShares,
      openDateTime: this.openDateTime,
      remarks : this.remarks
    }

    console.log(this.new_ipo);

    this.service.UpdateIPO(this.new_ipo).subscribe(i => {
      console.log(i);
      this.toastr.success("IPO Updated Sucessfully")
    });
  }

}
