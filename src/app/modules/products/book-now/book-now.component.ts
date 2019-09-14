import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  constructor(private actroute : ActivatedRoute) { }

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
        console.log(params);
      }
    )
  }

}
