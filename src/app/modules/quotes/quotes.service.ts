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
    let body ={
      module : "Quotes",
      view : "list"
    }
    return this.http.post(this.useSer.serverUrl,'body');
    // return this.useSer.serverUrl;
  }



}
