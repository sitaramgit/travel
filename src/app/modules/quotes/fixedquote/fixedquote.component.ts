import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixedquote',
  templateUrl: './fixedquote.component.html',
  styleUrls: ['./fixedquote.component.css']
})
export class FixedquoteComponent implements OnInit {

  constructor() { }
  public tog=true;
  ngOnInit() {
  }
  toggle(){
    this.tog = !this.tog;
  }

}
