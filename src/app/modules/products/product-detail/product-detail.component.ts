import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product:any;
  constructor(private actRoute:ActivatedRoute, public proSer:ProductService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      param => this.productDetail(param.id)
    )
  }


  productDetail(id){
    this.proSer.getProductDetail(id).subscribe(
      data => this.product = data[0].Products,
      err => console.log(err)
    )
  }

}
