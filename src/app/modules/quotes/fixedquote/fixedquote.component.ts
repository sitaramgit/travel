import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products/product.service';

@Component({
  selector: 'app-fixedquote',
  templateUrl: './fixedquote.component.html',
  styleUrls: ['./fixedquote.component.css']
})
export class FixedquoteComponent implements OnInit {

  constructor(private proSer: ProductService) { }
  public tog=true;
  public products:any = false;
  public loder:boolean = true;
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
        console.log(this.products)
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
    console.log(arr);
  }
}
