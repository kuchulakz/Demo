import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './Components/delete-employee/delete-employee.component'

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
