import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/gen-services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/gen-services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private share:SharedService, private actroute:ActivatedRoute, private route:Router, private usrSer:UserService) { }
    public errMsg:any = false;
    public regStatus:any = false;
    public for_pass:any = false;
  ngOnInit() {
    this.actroute.queryParams.subscribe(
      (param) =>{ 
        if(param.length !=0){
          this.regStatus = param.status != null ? true : false;
          this.for_pass = param.forgot != null ? true : false;
        }
      }
    )

    // this.regStatus = status ==null ? false : true;
    // console.log(this.regStatus)
    // console.log(status)
  }


  loginUser(loginFrm){
    console.log(loginFrm.value);
    this.usrSer.loginUser(loginFrm.value).subscribe(
      data => this.navigateUser(data),
      err => console.log(err)
    )
    
  }
  navigateUser(data){
    if(data[0] == 'INVALID_USERNAME_OR_PASSWORD'){
      this.errMsg = "Inavalid User or Password"; 
    }else{
      this.share.changeUserStatus(true);
      localStorage.setItem('user',JSON.stringify(data[0]));
      this.route.navigate(["/"]);
    }
  }
  




}
