import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/gen-services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private share:SharedService, private route:Router) { }

  ngOnInit() {
  }


  loginUser(loginFrm){
    console.log(loginFrm.value);
    this.share.changeUserStatus(true);
    localStorage.setItem('user',JSON.stringify(loginFrm.value));
    this.route.navigate(["/"]);
  }

}
