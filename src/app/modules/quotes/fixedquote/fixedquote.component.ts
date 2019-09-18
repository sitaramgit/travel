import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../products/product.service';

@Component({
  selector: 'app-fixedquote',
  templateUrl: './fixedquote.component.html',
  styleUrls: ['./fixedquote.component.css']
})
export class FixedquoteComponent implements OnInit {

  constructor(private proSer: ProductService, private route:Router) { }
  public tog=true;
  public products:any = false;
  public loder:boolean = true;
  public date_travel = '';
  public persons = '';
  ngOnInit() {
    this.allProducts();
  }
  toggle(){
    this.tog = !this.tog;
  }


  allProducts(){
    this.proSer.getProducts().subscribe(
      data => {        
        this.products = data[0].item;
      },
      err => console.log(err),
      ()=>{ this.loder = false;}
    )
  }

  confirmBooking(){
    let qout:any =  document.getElementsByClassName('products_ids');
    let arr = [];
    for(let i=0; i<qout.length; i++){
      if(qout[i].checked){        
        arr.push(qout[i].value);
      }
    }
    //Save Quote with other values
    var date_travel=<HTMLInputElement>document.getElementById('dateoftravel');
    var persons = <HTMLInputElement>document.getElementById('noofadults');
    var params = {};
    params['date_travel'] = date_travel.value;
    params['persons'] = persons.value;
    params['products'] = arr;
 
    let usr = localStorage.getItem('user');
    let id = JSON.parse(usr).id;
    params['contact'] = id;
    console.log(params);
    this.proSer.createMuipleProductQuote(params).subscribe(
      data=>{
        console.log(data);
        if(data[0].item != 'undefined'){
           this.route.navigate(['/quotes/detail/'+data[0].item]);
        }
      },
      err =>console.log(err)
    )

  }
}
