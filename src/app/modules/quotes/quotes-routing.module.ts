import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';

const routes: Routes = [
  {path:"", component:QuotesListComponent},
  {path:"detail/:id", component:QuotesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
