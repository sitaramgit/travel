import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProfileComponent, UserComponent, UserEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UserRoutingModule,
    
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
