import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from '../Shared/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  userid: string;
  pwd: string;
  isadmin:string;
  isuser:string;
  constructor(private service :AdminServiceService, private toastr:ToastrService, private router : Router) { }

  ngOnInit() {
    
  }
  
  async onLogin(form:NgForm)
  {
    await this.service.ValidateAdmin(this.userid,this.pwd).then(response => {
      this.isadmin = response;
    });

    if(this.isadmin == "Truee")
    {
      this.router.navigate(['/Admin']);
      this.toastr.success("Admin Logged In");
    }

    await this.service.ValidateUser(this.userid,this.pwd).then(response => {
      this.isuser = response;
    });
    
    if(this.isuser == "Truee")
    {
      this.router.navigate(['User']);
      this.toastr.success("User Logged In");
    }

  }
    
  

}
