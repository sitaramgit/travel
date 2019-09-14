import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BookNowComponent } from './book-now/book-now.component';

const routes: Routes = [
  {path:"", component:ProductListComponent},
  {path:"detail/:id", component:ProductDetailComponent},
  {path:"book-now/:id", component:BookNowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
