import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { FixedquoteComponent } from './fixedquote/fixedquote.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomquoteComponent } from './customquote/customquote.component';

@NgModule({
  declarations: [QuotesComponent, QuotesListComponent, QuotesDetailComponent, QuoteEditComponent,FixedquoteComponent, CustomquoteComponent],
  imports: [
    CommonModule, 
    SharedModule,
    QuotesRoutingModule
  ],
  bootstrap: [QuotesComponent]
})
export class QuotesModule { }
