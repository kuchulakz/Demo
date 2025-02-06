import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';

const routes: Routes = [
  {path:'add', component:AddEmployeeComponent},
  {path:'view', component:ViewEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
