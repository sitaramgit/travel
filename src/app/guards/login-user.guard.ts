import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';  
import { SharedService } from '../gen-services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginUserGuard implements CanActivate  {
  constructor(private share:SharedService, private router:Router){}
  canActivate(){
    if(this.share.loggedIn()){
      this.router.navigate(['/']);
      return false;
    }else{
      return true;
    }
    
  }
  
}
