import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { AgeCheckComponent } from './age-check/age-check.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomerComponent,
    LoginComponent,
    AgeCheckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
