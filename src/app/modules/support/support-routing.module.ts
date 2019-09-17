import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportListComponent } from './support-list/support-list.component';
import { SupportEditComponent } from './support-edit/support-edit.component';
import { SupportDetailComponent } from './support-detail/support-detail.component';

const routes: Routes = [
  {path:"",component:SupportListComponent},
  {path:"edit",component:SupportEditComponent},
  {path:"detail/:id",component:SupportDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
