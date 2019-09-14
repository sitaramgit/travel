import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/gen-services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user:boolean;
  constructor(private share:SharedService, private route:Router) { }

  ngOnInit() {
    this.share.authUser.subscribe(
      logged => this.user = logged
    );
     
  }


  logoutUser(){
    this.share.changeUserStatus(false);
    localStorage.removeItem('user');
    localStorage.clear();
    location.reload();
    this.route.navigate(["/login"]);
    return false;
  }
}
