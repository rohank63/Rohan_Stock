import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './Admin/Admin.component';
import { UserComponent } from './User/User.component';
import { ManageCompanyComponent } from './AdminTask/ManageCompany/ManageCompany.component';
import { AdminServiceService } from './Shared/admin-service.service';
import { NewCompanyComponent } from './AdminTask/NewCompany/NewCompany.component';
import { ToastrModule } from 'ngx-toastr';
import { ManageExchangeComponent } from './AdminTask/ManageExchange/ManageExchange.component';
import { NewExchangeComponent } from './AdminTask/NewExchange/NewExchange.component';
import { ManageIPOComponent } from './AdminTask/ManageIPO/ManageIPO.component';
import { NewIPOComponent } from './AdminTask/NewIPO/NewIPO.component';
import { ViewIPOComponent } from './UserTask/ViewIPO/ViewIPO.component';
import { ImportDataComponent } from './AdminTask/ImportData/ImportData.component';
import { EditCompanyComponent } from './AdminTask/ManageCompany/EditCompany/EditCompany.component';
import { EditIPOComponent } from './AdminTask/ManageIPO/EditIPO/EditIPO.component';
import { AuthAdminService } from './Shared/Auth-Admin.service';
import { AuthUserService } from './Shared/Auth-User.service';
import { CompareCompanyComponent } from './UserTask/CompareCompany/CompareCompany.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CompareSectorComponent } from './UserTask/CompareSector/CompareSector.component';



@NgModule({
  declarations: [					
    AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      AdminComponent,
      UserComponent,
      ManageCompanyComponent,
      NewCompanyComponent,
      ManageExchangeComponent,
      NewExchangeComponent,
      ManageIPOComponent,
      NewIPOComponent,
      ViewIPOComponent,
      ImportDataComponent,
      EditCompanyComponent,
      EditIPOComponent,
      CompareCompanyComponent,
      CompareSectorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    GoogleChartsModule,
  ],
  providers: [AdminServiceService,AuthAdminService,AuthUserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
