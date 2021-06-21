import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Company } from '../Models/company.model';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
import { StockExchange } from '../Models/stock-exchange.model';
import { IPO } from '../Models/ipo.model';
import { StockPrice } from '../Models/stock-price.model';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  temp_company:Company;
  temp_ipo:IPO;

  is_user_authenticated : boolean = false;
  is_admin_authenticated : boolean = false;

  adminpath:string = "http://localhost:5000/Admin/";
  accountpath:string = "http://localhost:59335/Account/";
  excelpath:string = "http://localhost:44315/Excel/";


constructor(private http: HttpClient) { }

public CompanyDetails(item:Company)
{
  this.temp_company = item;
}

public IPODetails(item:IPO)
{
  this.temp_ipo = item;
}

public GetAll():Observable<Company[]>{
  return this.http.get<Company[]>(this.adminpath + "AllCompany");
}

public AddCompany(item:Company):Observable<any>{
  return this.http.post<any>(this.adminpath + "AddCompany", item);
}

public AddUser(item:User):Observable<any>{
  return this.http.post<any>(this.accountpath + "AddUser", item);
}

public AllExchange():Observable<StockExchange[]>{
  return this.http.get<StockExchange[]>(this.adminpath + "AllExchange");
}

public AddExchange(item:StockExchange):Observable<any>{
  return this.http.post<any>(this.adminpath + "AddExchange",item)
}

public AllIPO():Observable<IPO[]>{
  return this.http.get<IPO[]>(this.adminpath + "AllIPO");
}

public AddIPO(item:IPO):Observable<any>{
  return this.http.post<any>(this.adminpath + "AddIPO", item);
}


public UploadSD(item:StockPrice[]):Observable<any>{
  return this.http.post<any>(this.excelpath + "UploadData", item);
}

public DeleteCompany(item:string):Observable<any>{
  return this.http.get<any>(this.adminpath + "DeleteCompany/" + item);
}

public DeleteIPO(item:IPO):Observable<any>{
  return this.http.put<any>(this.adminpath + "DeleteIPO", item);
}

public UpdateCompany(item:Company):Observable<any>{
  return this.http.put<any>(this.adminpath + "EditCompany", item);
}

public UpdateIPO(item:IPO):Observable<any>{
  return this.http.put<any>(this.adminpath + "EditIPO", item);
}

public ValidateAdmin(uname:string,pwd:string):Promise<any>{
  this.is_admin_authenticated = true;
  return this.http.get(this.adminpath + "Validate/" + uname + "/" + pwd, {responseType:'text'}).toPromise();
}

public ValidateUser(uname:string,pwd:string):Promise<any>{
  this.is_user_authenticated = true;
  return this.http.get(this.accountpath + "Validate/" + uname + "/" + pwd, {responseType:'text'}).toPromise();
}

}
