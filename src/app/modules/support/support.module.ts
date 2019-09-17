import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { SupportEditComponent } from './support-edit/support-edit.component';
import { SupportDetailComponent } from './support-detail/support-detail.component';
import { SupportListComponent } from './support-list/support-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SupportComponent,
              SupportEditComponent,
                SupportDetailComponent, 
                SupportListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    SupportRoutingModule,
  ],
  bootstrap: [SupportComponent]

})
export class SupportModule { }
