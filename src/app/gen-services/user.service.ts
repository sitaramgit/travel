import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) { }

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

    currentUserDetails(){
      let usr = localStorage.getItem('user');
      return JSON.parse(usr);
    }
}
