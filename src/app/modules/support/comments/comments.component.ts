import { Component, OnInit ,Input} from '@angular/core';
import { SupportService } from '../support.service';
import { UserService } from 'src/app/gen-services/user.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private supSer:SupportService, public usSer:UserService ) { }
  @Input('ticket_data') data = null;
  comts:any = false;
  commentData:any = null;
  ngOnInit() { 
    this.commentsAll();
  }

  commentsAll(){
    this.supSer.getComments(this.data).subscribe(
      (data) => {this.comts = data},
      err => console.log(err)
    )
  }

  addCmt(){
    if(this.commentData!=''){
      this.supSer.addComments({cmt:this.commentData, tkt:this.data}).subscribe(
        (data)=>{
          console.log(data);
          this.commentsAll();
          this.commentData = null;
        },
        err => console.log(err)
      )
    }
  }
}
