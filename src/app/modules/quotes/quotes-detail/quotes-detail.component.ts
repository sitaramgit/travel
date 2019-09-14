import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  public quote:any;
  public products:any;
  public loder:boolean = true; 
  public finalcal:any;
  constructor(private actRoute:ActivatedRoute, private quoSer:QuotesService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      param => this.quoteDetail(param.id)
    )
  }

  quoteDetail(id){
    this.quoSer.getQuoteDetail(id).subscribe(
      data=>{
        this.quote = data[0].Quotes;
        this.products = data[0].Quotes.Products.pro;
        this.finalcal = data[0].Quotes.Products.finalcal;
        // console.log(this.products)

        // let arr = [];
        // for (let [key, value] of Object.entries(prod)) {
        //   console.log(key)
        //   if(key != "finalcal"){
        //     arr.push(value);
        //   }
          
      // }
      console.log(data)
 
      }, 
      err => console.log(err),
      ()=>this.loder = false
    )
  }

}
