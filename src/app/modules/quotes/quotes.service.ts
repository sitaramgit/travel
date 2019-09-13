import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/gen-services/user.service';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http:HttpClient, private useSer:UserService) { }

  getQuoteList(){
    let body = {  module : "Quotes",view : "list" , id:this.useSer.currentUser.id};
    return this.http.post(this.useSer.serverUrl,body); 
  }

  getQuoteDetail(id){
    let body = {  module : "Quotes",view : "detail", record : id };
    return this.http.post(this.useSer.serverUrl,body); 
  }



}
