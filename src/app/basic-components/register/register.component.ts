import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/gen-services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usrSer:UserService, private route:Router) { }

  ngOnInit() {
  }

  createUser(data){
    
    data['portal'] = '1';
    data['__vtrftk'] = 'sid:1c722aa51f40fedd390d591856b43ee6880b9307,1568359552';
    data['publicid'] = '0a6456d725518b18cb6382e04874d43d';
    data['urlencodeenable'] = '1';
    data['name'] = 'travelcrm'; 
    this.usrSer.createUser(data).subscribe(
      res => console.log(res),
      err => this.navigateUser(err)
    )
    
  }

  navigateUser(err){
    // this.route.navigate(['/login',{ status: 'created' }]);
    this.route.navigate(['/login'], { queryParams: { status: 'created' } });
  }

}
