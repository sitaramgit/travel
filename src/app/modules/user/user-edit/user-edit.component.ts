import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/gen-services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public loder:boolean = true;
  public profile:any;
  constructor(private usrSer:UserService) { }

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
  editUser(val){
    console.log(val)
  }
}
