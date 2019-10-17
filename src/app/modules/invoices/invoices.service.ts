import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/gen-services/user.service';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http:HttpClient, private useSer:UserService) { }

  getInvoiceList(){
    let body = {  module : "Invoices",view : "list" , id:this.useSer.currentUserDetails().id};
    return this.http.post(this.useSer.serverUrl,body); 
  }

  getInvoiceDetail(id){
    let body = {  module : "Invoices",view : "detail", record : id, contactid:this.useSer.currentUserDetails().id };
    return this.http.post(this.useSer.serverUrl,body); 
  }



}
