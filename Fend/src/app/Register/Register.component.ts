import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Models/user.model';
import { AdminServiceService } from '../Shared/admin-service.service';



@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  new_user:User;
  userName:string;
  passWord:string;
  email:string;
  mobile:string;
  confirmed:string;

  constructor(private service:AdminServiceService, private toastr:ToastrService) { }

  ngOnInit() {
    
  }
  addNewUser(form:NgForm)
  {
    this.new_user = {
      userName:this.userName,
      passWord:this.passWord,
      email:this.email,
      mobile:this.mobile,
      confirmed:this.confirmed
    }
    this.service.AddUser(this.new_user).subscribe(i => {
      console.log(i)
      this.toastr.success("User Added Successfully")
    });
  }
}
