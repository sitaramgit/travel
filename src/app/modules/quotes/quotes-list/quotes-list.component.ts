import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  constructor(private quoSer:QuotesService) { }
  public quotes:any = false; 
  public loder:boolean = true; 
  public emptyData:boolean = false; 
  public dataType:any; 
  ngOnInit() {
    this.quoteList();
  }

  quoteList(){
    this.quoSer.getQuoteList().subscribe(
      data => {
        this.loder = false;
        this.quotes = data[0].item; 
        var length = Object.keys(data[0].item).length; 
        this.dataType = data[0].item.length > 1 ? false : true; 
        this.loder = false;
      },
      err => console.log(err),
      ()=> this.loder = false
    )
  }

  
}
