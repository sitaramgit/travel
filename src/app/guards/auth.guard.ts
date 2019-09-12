import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../gen-services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate  {

  constructor(private share:SharedService, private router:Router){}

  canActivate():boolean{
    if(this.share.loggedIn()){
    return true;
    }else{
    this.router.navigate(['/login']);
    return false;
    }
    }
  
}
