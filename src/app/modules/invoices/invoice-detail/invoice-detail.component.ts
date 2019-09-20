import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  public invoice:any;
  public products:any;
  public loder:boolean = true; 
  public finalcal:any;
  public record:any;
  constructor(private actRoute:ActivatedRoute, private quoSer:InvoicesService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      param => this.invoiceDetail(param.id)
    )
  }

  invoiceDetail(id){
    this.record = id;
    this.quoSer.getInvoiceDetail(id).subscribe(
      data=>{
        console.log(data)
        // this.invoice = data[0].Invoices;
        // this.products = data[0].Invoices.Products.pro;
        // this.finalcal = data[0].Invoices.Products.finalcal;
     }, 
      err => console.log(err),
      ()=>this.loder = false
    )
  }

}
