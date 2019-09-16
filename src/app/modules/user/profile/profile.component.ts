import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/gen-services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private usrSer:UserService) { }
  public loder:boolean = true;
  public profile:any;

  ngOnInit() {
    this.userDetails();
  }
  userDetails(){
    this.usrSer.getUserDetails().subscribe(
      (data)=>this.profile = data[0].Contacts,
      (err)=> console.log(err),
      () => this.loder = false
    )
  }
}
