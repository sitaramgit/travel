import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/gen-services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private usrSer:UserService, public actRoute:ActivatedRoute, public route:Router) { }
  public errMsg:any = false;
  ngOnInit() {
  }

  sendEmail(val){
    console.log(val);
    this.usrSer.forgot_Password(val).subscribe(
      (data)=>{
        this.errMsg = data;
        if(data == "Mail sent"){
          this.route.navigate(['/login'], { queryParams: { forgot: 'mail_sent' } })
        }
      },
      err => console.log(err)
    )
  }

}
