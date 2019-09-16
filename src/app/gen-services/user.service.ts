import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient, private share:SharedService) { }

  // public serverUrl = "http://173.255.216.217/travelcrm/turtle.php";
    public serverUrl = "http://173.255.216.217/travelcrm/TravelSoap.php";
    public path:string = "http://173.255.216.217/travelcrm/"
    public currentUser = this.currentUserDetails();
    loginUser(data):Observable<any>{
      let params={module:"user",view:"check", email : data.email, password : data.password };
      return this.http.post(this.serverUrl,params);
    }
    createUser(data):Observable<any>{
      return this.http.post('http://173.255.216.217/travelcrm/modules/Webforms/capture.php',data);
    }

    updateUser(data):Observable<any>{
      return this.http.post(this.serverUrl,data);
    }

    changeUserPassword(data):Observable<any>{
      return this.http.post(this.serverUrl,data);
    }
    forgot_Password(data):Observable<any>{
      return this.http.post(this.serverUrl,data);
    }

    currentUserDetails(){
      let usr = localStorage.getItem('user');
      return JSON.parse(usr);
    }
    getUserDetails():Observable<any>{
    
      let params={module:"user",view:"details", record:this.currentUserDetails().id};
      return this.http.post(this.serverUrl,params);
    }

    logoutUser(){
      this.share.changeUserStatus(false);
      localStorage.removeItem('user');
      localStorage.clear();
      location.reload(); 
    }
}
