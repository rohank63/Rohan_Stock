import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { StockExchange } from 'src/app/Models/stock-exchange.model';

@Component({
  selector: 'app-NewExchange',
  templateUrl: './NewExchange.component.html',
  styleUrls: ['./NewExchange.component.css']
})
export class NewExchangeComponent implements OnInit {
  newexchange:StockExchange;
  exchangename:string;
  brief:string;
  address:string;
  remarks:string;
  constructor(private service:AdminServiceService, private toastr: ToastrService) { }
  
  ngOnInit() {
  }

  addExchange(form:NgForm)
  {
    this.newexchange = {
      stockExchangeName : this.exchangename,
      brief : this.brief,
      address : this.address,
      remarks : this.remarks
    }

    this.service.AddExchange(this.newexchange).subscribe(i => {
      console.log(i)
      this.toastr.success("Exchange Added Sucessfully")
    });
  }
}
