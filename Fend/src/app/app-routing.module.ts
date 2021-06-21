import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/Admin.component';
import { ImportDataComponent } from './AdminTask/ImportData/ImportData.component';
import { EditCompanyComponent } from './AdminTask/ManageCompany/EditCompany/EditCompany.component';
import { ManageCompanyComponent } from './AdminTask/ManageCompany/ManageCompany.component';
import { ManageExchangeComponent } from './AdminTask/ManageExchange/ManageExchange.component';
import { EditIPOComponent } from './AdminTask/ManageIPO/EditIPO/EditIPO.component';
import { ManageIPOComponent } from './AdminTask/ManageIPO/ManageIPO.component';
import { NewCompanyComponent } from './AdminTask/NewCompany/NewCompany.component';
import { NewExchangeComponent } from './AdminTask/NewExchange/NewExchange.component';
import { NewIPOComponent } from './AdminTask/NewIPO/NewIPO.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { AuthAdminService } from './Shared/Auth-Admin.service';
import { AuthUserService } from './Shared/Auth-User.service';
import { UserComponent } from './User/User.component';
import { ViewIPOComponent } from './UserTask/ViewIPO/ViewIPO.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent},
  {path:'Login', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Admin',component:AdminComponent,canActivate:[AuthAdminService]},
  {path:'User',component:UserComponent,canActivate:[AuthUserService]},
  {path:'ManageCompany',component:ManageCompanyComponent,canActivate:[AuthAdminService]},
  {path:'NewCompany',component:NewCompanyComponent,canActivate:[AuthAdminService]},
  {path:'ManageExchange',component:ManageExchangeComponent,canActivate:[AuthAdminService]},
  {path:'NewExchange',component:NewExchangeComponent,canActivate:[AuthAdminService]},
  {path:'ManageIPO',component:ManageIPOComponent,canActivate:[AuthAdminService]},
  {path:'NewIPO',component:NewIPOComponent,canActivate:[AuthAdminService]},
  {path:'ViewIPO',component:ViewIPOComponent,canActivate:[AuthUserService]},
  {path:'Import',component:ImportDataComponent,canActivate:[AuthAdminService]},
  {path:'EditCompany',component:EditCompanyComponent,canActivate:[AuthAdminService]},
  {path:'EditIPO',component:EditIPOComponent,canActivate:[AuthAdminService]},
  {path:'',redirectTo:'Home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
