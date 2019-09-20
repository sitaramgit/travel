import { Component, OnInit, Input } from '@angular/core';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  @Input() ticket_id;
  constructor(private supSer:SupportService) { }

  ngOnInit() {
    console.log(this.ticket_id)
    this.updateList();
  }

  updateList(){
    this.supSer.getUpdateList(this.ticket_id).subscribe(
      data=>console.log(data),
      err => console.log(err)
    )
  }
}
