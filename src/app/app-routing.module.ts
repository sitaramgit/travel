import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './basic-components/home/home.component';
import { PageNotFoundComponent } from './basic-components/page-not-found/page-not-found.component';
import { LoginComponent } from './basic-components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginUserGuard } from './guards/login-user.guard';

const routes: Routes = [
  {path : "", component : HomeComponent, canActivate:[AuthGuard]},
  {path : "login", component : LoginComponent, canActivate:[LoginUserGuard]},
  {path : "products", loadChildren :"./modules/products/products.module#ProductsModule", canActivate:[AuthGuard] },
  {path : "**", component : PageNotFoundComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
