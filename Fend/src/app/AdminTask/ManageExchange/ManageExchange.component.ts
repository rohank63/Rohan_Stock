import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';
import { HttpClient } from '@angular/common/http';
import { StockExchange } from 'src/app/Models/stock-exchange.model';

@Component({
  selector: 'app-ManageExchange',
  templateUrl: './ManageExchange.component.html',
  styleUrls: ['./ManageExchange.component.css']
})
export class ManageExchangeComponent implements OnInit {
  exchangelist:StockExchange[];

  constructor(private service:AdminServiceService) {
    this.service.AllExchange().subscribe(response => {
      this.exchangelist = response
    });
  }

  ngOnInit() {
  }

}
