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
        this.quotes = data[0].item; 
        var length = Object.keys(data[0].item).length; 
        this.dataType = data[0].item.length > 1 ? false : true; 
      },
      err => console.log(err),
      ()=> this.loder = false
    )
  }

  quoteUnique(data){
   
    const result = [];
    const map = new Map();
    for (const item of data) {
        if(!map.has(item.id)){
            map.set(item.id, true);    // set any value to Map
            result.push({
                id: item.id,
                createdtime: item.createdtime,
                subject: item.subject,
                quantity: item.quantity,
                hdnSubTotal: item.hdnGrandTotal,
            });
        }
    }
    this.quotes = result;
}
}
