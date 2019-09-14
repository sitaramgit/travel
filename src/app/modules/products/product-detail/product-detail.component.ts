import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { UserService } from 'src/app/gen-services/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product:any;
  public loder:boolean = true;
  constructor(private actRoute:ActivatedRoute, public proSer:ProductService, public usrSer:UserService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      param => this.productDetail(param.id)
    )
  }


  productDetail(id){
    this.proSer.getProductDetail(id).subscribe(
      data => { 
        this.product = data[0].Products;
        this.product['record'] = id;
      },
      err => console.log(err),
      () => this.loder= false
    )
  }

}
