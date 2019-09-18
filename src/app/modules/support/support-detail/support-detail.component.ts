import { Component, OnInit } from '@angular/core';
import { SupportService } from '../support.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-support-detail',
  templateUrl: './support-detail.component.html',
  styleUrls: ['./support-detail.component.css']
})
export class SupportDetailComponent implements OnInit {

  constructor(private supSer:SupportService, private actRoute:ActivatedRoute) { }
  loder = true;
  details:any = false;
  ngOnInit() {
     this.actRoute.params.subscribe(
      data => this.ticketDetails(data.id)
    ) ;
    
  }

  ticketDetails(id){
    this.supSer.getTicketDetail(id).subscribe(
      data =>this.details = data[0].HelpDesk,
      err => console.log(err),
      ()=> this.loder = false
    )
  }
}
