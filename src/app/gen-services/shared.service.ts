import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private userLogged = new BehaviorSubject(this.loggedIn());
  authUser = this.userLogged.asObservable();


  changeUserStatus(data: boolean) {
    this.userLogged.next(data);
  }

  

  loggedIn(){
    let user = localStorage.getItem('user');
    let ret;
    if(user==null){
      ret = false;
    }else{
       ret = true;
    }
    return ret;
  }
}
