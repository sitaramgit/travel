import { Component, OnInit } from '@angular/core';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css']
})
export class SupportListComponent implements OnInit {

  constructor(private supSer:SupportService) { }
  public tickets:any = false;
  public loader:any = false;
  public records:any = false;
  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets(){
    this.supSer.getTickets().subscribe(
      (data)=>{
        this.tickets = data[0].item.rows == 1 ? [data[0].item] : data[0].item;
        this.records = data[0].item.rows == 0 ? true:  false;
        this.loader = true;
        console.log(this.tickets)
      },
      err => console.log(err),
      () => console.log('process')
      
    )
  }
}
