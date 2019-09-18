import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products/product.service';
import { SupportService } from '../support.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-support-edit',
  templateUrl: './support-edit.component.html',
  styleUrls: ['./support-edit.component.css']
})
export class SupportEditComponent implements OnInit {

  constructor(private actroute:ActivatedRoute, private proSer:ProductService,private supSer:SupportService, private router:Router) { }
  options = ['kerala','abc','normal'];
  products:any = false;
  loder = true;
  ticket_id:any = false;
  status:any;
  tickets = new Tickets('','','','','','','','ticket','create','');
  ngOnInit() {
    let ticket = this.actroute.snapshot.queryParamMap.get('id');
    this.status = this.actroute.snapshot.queryParamMap.get('status');
    if(ticket!=null){
      this.updateObject(ticket);
    }
    
    this.allProducts();
  }
  updateObject(id){
    this.supSer.getTicketDetail(id).subscribe(
      (data)=>{
        let detali = data[0].HelpDesk;
        this.tickets = new Tickets(detali.ticket_title,
          detali.ticketpriorities,
          this.status,detali.product_id,detali.ticketseverities,
          detali.ticketcategories,detali.description,'ticket','create',id);
      },
      err=>console.log(err)
    )
    
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
    
    this.supSer.createTicket(this.tickets).subscribe(
      (data) =>{
        console.log(data);
        this.router.navigate(['/support']);
      } ,
      err=>console.log(err)
    )

  }

 

}


export class Tickets {
  constructor(
    public title:string,
    public priority:string,
    public status:string,
    public product_name:any,
    public severity:any,
    public category:any,
    public description:any,
    public module:any,
    public view:any,
    public record:any,
  ){}
}