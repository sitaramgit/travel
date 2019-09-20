import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';

@NgModule({
  declarations: [InvoiceListComponent, InvoicesComponent, InvoiceDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    InvoicesRoutingModule
  ],
  bootstrap: [InvoicesComponent]
})
export class InvoicesModule { }
