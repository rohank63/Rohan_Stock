import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/Models/ipo.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';

@Component({
  selector: 'app-ViewIPO',
  templateUrl: './ViewIPO.component.html',
  styleUrls: ['./ViewIPO.component.css']
})
export class ViewIPOComponent implements OnInit {
  ipolist:IPO[];
  constructor(private service:AdminServiceService) { 
    this.service.AllIPO().subscribe(response => {
      this.ipolist = response
   });
  }

  ngOnInit() {
  }

}
