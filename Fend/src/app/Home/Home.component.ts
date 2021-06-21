import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../Shared/admin-service.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : AdminServiceService) { 
    this.service.is_admin_authenticated = false;
    this.service.is_user_authenticated = false;
  }

  ngOnInit() {
  }

}
