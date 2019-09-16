import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { FixedquoteComponent } from './fixedquote/fixedquote.component';
import { CustomquoteComponent } from './customquote/customquote.component';

const routes: Routes = [
  {path:"", component:QuotesListComponent},
  {path:"fixed-quote", component:FixedquoteComponent},
  {path:"custom-quote", component:CustomquoteComponent},
  {path:"detail/:id", component:QuotesDetailComponent},
  {path:"edit/:id", component:QuoteEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
