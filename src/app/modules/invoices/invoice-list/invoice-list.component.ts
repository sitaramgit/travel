import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  constructor(private quoSer:InvoicesService) { }
  public invoices:any = false; 
  public loder:boolean = true; 
  public emptyData:boolean = false; 
  public dataType:any; 

  ngOnInit() {
    this.invoiceList();
  }

  invoiceList(){
    this.quoSer.getInvoiceList().subscribe(
      data => {
        this.loder = false;
        this.invoices = data[0].item; 
        var length = Object.keys(data[0].item).length; 
        this.dataType = data[0].item.length > 1 ? false : true; 
        this.loder = false;
      },
      err => console.log(err),
      ()=> this.loder = false
    )
  }

}
