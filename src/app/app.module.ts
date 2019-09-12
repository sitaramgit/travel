import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './basic-components/header/header.component';
import { SidebarComponent } from './basic-components/sidebar/sidebar.component';
import { FooterComponent } from './basic-components/footer/footer.component';
import { HomeComponent } from './basic-components/home/home.component';
import { PageNotFoundComponent } from './basic-components/page-not-found/page-not-found.component';
import { ProductsModule } from './modules/products/products.module';
import { LoginComponent } from './basic-components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginUserGuard } from './guards/login-user.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,LoginUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
