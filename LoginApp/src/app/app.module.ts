import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthService} from  './auth.service'
import { UserService } from './user.service'
import { AuthGuard} from  './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductsListComponent } from './products-list/products-list.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LogoutComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductDisplayComponent,
    ProductImageComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [AuthService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
 