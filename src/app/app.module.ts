import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ProductComponent } from './product/product.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    UserRegistrationComponent,
    ProductComponent,
    ProductInfoComponent,
    SellerInfoComponent,
    ProductCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    ReactiveFormsModule,
    OwlModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
