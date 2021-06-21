import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from './admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService implements CanActivate{

constructor(private service:AdminServiceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.service.is_admin_authenticated == true)
      return true;
     
    alert('You are not Logged In'); 
    this.router.navigate(['Home']);
    return false;
  }

}
