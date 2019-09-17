import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products/product.service';

@Component({
  selector: 'app-support-edit',
  templateUrl: './support-edit.component.html',
  styleUrls: ['./support-edit.component.css']
})
export class SupportEditComponent implements OnInit {

  constructor(private proSer:ProductService) { }
  options = ['kerala','abc','normal'];
  products:any = false;
  loder = true;
  ngOnInit() {
    this.allProducts();
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

  ticketForm(val){
    console.log(val);
  }








}
