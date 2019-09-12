import { Component, OnInit } from '@angular/core';
import { SharedService } from './gen-services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'travel';
  public user:boolean;
  public panel:string = "right-panel";
  constructor(private share:SharedService, private route:Router){}

  ngOnInit(){

    this.share.authUser.subscribe(
      logged => {
        this.user = logged;
        this.navigateUser(this.user);
      }
    );

  }

  navigateUser(user){
    if(!user){
      this.panel = "abc";
      this.route.navigate(['/login']);
    }
  }
}
