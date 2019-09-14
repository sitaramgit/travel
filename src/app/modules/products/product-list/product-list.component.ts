import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserService } from 'src/app/gen-services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private proSer:ProductService,public usSer:UserService) { }
  public products:any = false;
  public loder:boolean = true;
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
}
