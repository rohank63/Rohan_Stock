import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/Models/ipo.model';
import { AdminServiceService } from 'src/app/Shared/admin-service.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ManageIPO',
  templateUrl: './ManageIPO.component.html',
  styleUrls: ['./ManageIPO.component.css']
})
export class ManageIPOComponent implements OnInit {
  ipolist:IPO[];

  constructor(private service:AdminServiceService, private toastr:ToastrService) {
    this.service.AllIPO().subscribe(response => {
      this.ipolist = response
   });
}

  ngOnInit() {
  }

  DeleteIPO(item:IPO)
  {
    this.service.DeleteIPO(item).subscribe(i => {
      console.log(i);
      this.toastr.success("Deleted");
    });
  }

  StoreIPO(item:IPO)
  {
    this.service.IPODetails(item);
  }
}
