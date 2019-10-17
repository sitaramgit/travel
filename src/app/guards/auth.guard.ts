import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../gen-services/shared.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../gen-services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate  {
 
  constructor(private share:SharedService,private userSer:UserService, private router:Router, private http:HttpClient){
   
  }

  canActivate():boolean{
    this.userSer.session_id()
    
   
    if(this.share.loggedIn()){
    return true;
    }else{
    this.router.navigate(['/login']);
    return false;
    }
    }
  
}
