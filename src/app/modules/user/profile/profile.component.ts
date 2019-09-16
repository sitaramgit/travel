import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/gen-services/user.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private usrSer:UserService, public dialog:MatDialog) { }
  public loder:boolean = true;
  public profile:any;

  ngOnInit() {
    this.userDetails();
  }
  openDialog(){

  }

  changePass(val){ 
    this.usrSer.changeUserPassword(val).subscribe(
      (data) => {
        console.log(data);
        this.usrSer.logoutUser();
      },
      err=>console.log(err)
    )
  }
  userDetails(){
    this.usrSer.getUserDetails().subscribe(
      (data)=>this.profile = data[0].Contacts,
      (err)=> console.log(err),
      () => this.loder = false
    )
  }
}
