import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './basic-components/home/home.component';
import { PageNotFoundComponent } from './basic-components/page-not-found/page-not-found.component';
import { LoginComponent } from './basic-components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginUserGuard } from './guards/login-user.guard';
import { RegisterComponent } from './basic-components/register/register.component';

const routes: Routes = [
  {path : "", component : HomeComponent, canActivate:[AuthGuard]},
  {path : "login", component : LoginComponent, canActivate:[LoginUserGuard]},
  {path : "register", component : RegisterComponent, canActivate:[LoginUserGuard]},
  {path : "quotes", loadChildren :"./modules/quotes/quotes.module#QuotesModule", canActivate:[AuthGuard] },
  {path : "products", loadChildren :"./modules/products/products.module#ProductsModule", canActivate:[AuthGuard] },
  {path : "user", loadChildren :"./modules/user/user.module#UserModule", canActivate:[AuthGuard] },
  {path : "**", component : PageNotFoundComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
