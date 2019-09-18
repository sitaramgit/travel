import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  constructor(private actroute : ActivatedRoute, private proSer:ProductService, private route:Router) { }
  public details:any;
  public persion = 1;

    persn = new Book(1)
  ngOnInit() {

    this.actroute.queryParams.subscribe(
      (param) =>{ 
        let params = {};
        let arr = param.price.replace("(?)", "");
        if(typeof(param) == 'object'){
          params['cost'] = arr;
          params['title'] = param.title;
          params['avaible'] = param.avaible;
        } 
        this.details = params;
      }
    )
    
  }

  quote(val){
    let usr = localStorage.getItem('user');
    let id = JSON.parse(usr).id;
    val['record'] = this.actroute.snapshot.params.id;
    val['contact'] = id;
     
    this.proSer.createQuote(val).subscribe(
      data=>{
        console.log(data);
        this.route.navigate(['/quotes/detail/'+data[0].item]);
      },
      err =>console.log(err)
    )
  }

}

export class Book {
  constructor(
    public person:any, 
  ){}
}