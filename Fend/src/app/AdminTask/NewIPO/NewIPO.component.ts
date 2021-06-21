import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPO } from 'src/app/Models/ipo.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';

@Component({
  selector: 'app-NewIPO',
  templateUrl: './NewIPO.component.html',
  styleUrls: ['./NewIPO.component.css']
})
export class NewIPOComponent implements OnInit {
  new_ipo:IPO;
  companyName:string;
  stockExchangeName:string;
  pricePerShare:number;
  totalShares:number;
  openDateTime:string;
  remarks:string;
  constructor(private service:AdminServiceService,private toastr:ToastrService) { }

  ngOnInit() {
  }

  addNew(form:NgForm)
  {
    this.new_ipo = {
      companyName : this.companyName,
      stockExchangeName :this.stockExchangeName,
      pricePerShare : this.pricePerShare,
      totalShares:this.totalShares,
      openDateTime: this.openDateTime,
      remarks : this.remarks
    }

    this.service.AddIPO(this.new_ipo).subscribe(i => {
      console.log(i);
      this.toastr.success("IPO Added Sucessfully")
    });
  }
}
