import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/gen-services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private usrSer:UserService) { }
  
  getProducts():Observable<any>{ 
    let data ={module:'products', view:'list', id : this.usrSer.currentUserDetails().id}
    return this.http.post(this.usrSer.serverUrl,data);
  }

  getProductDetail(id):Observable<any>{
    let data ={module:'products', view:'detail', record : id};
    return this.http.post(this.usrSer.serverUrl,data); 
  }

  createQuote(param):Observable<any>{
    let data ={module:'Quotes', view:'create', record : param.record, qty:param.persons, contact:param.contact};
    return this.http.post(this.usrSer.serverUrl,data); 
  }
}
