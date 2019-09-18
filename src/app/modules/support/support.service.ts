import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/gen-services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(private http:HttpClient, private usr:UserService) { }

  createTicket(data):Observable<any>{
    data.contactid = this.usr.currentUserDetails().id;
    return this.http.post(this.usr.serverUrl,data);
  }

  getTickets():Observable<any>{ 
    let data ={module:'ticket', view:'list', id : this.usr.currentUserDetails().id}
    return this.http.post(this.usr.serverUrl,data);
  }

  getComments(tkt):Observable<any>{ 
    let data ={module:'ticket', view:'comments',tktid:tkt, id : this.usr.currentUserDetails().id}
    return this.http.post(this.usr.serverUrl,data);
  }
  addComments(frm):Observable<any>{ 
    let data ={module:'ticket', view:'commentscreate',comments:frm.cmt, tktid:frm.tkt, id : this.usr.currentUserDetails().id}
    return this.http.post(this.usr.serverUrl,data);
  }
 
  getTicketDetail(id):Observable<any>{ 
    let data ={module:'ticket', view:'detail', record : id}
    return this.http.post(this.usr.serverUrl,data);
  }





}
