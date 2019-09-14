import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BookNowComponent } from './book-now/book-now.component';

@NgModule({
  declarations: [ProductListComponent, ProductsComponent, ProductDetailComponent, BookNowComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
