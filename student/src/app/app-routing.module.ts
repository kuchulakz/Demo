import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Component/add-student/add-student.component';
import { ViewStudentComponent } from './Component/view-student/view-student.component';
import { ViewStudentByIdComponent } from './Component/view-student-by-id/view-student-by-id.component';
import { UpdateStudentComponent } from './Component/update-student/update-student.component';

const routes: Routes = [
  {path:'add', component:AddStudentComponent},
  {path:'', redirectTo:'/add', pathMatch:'full'},
  {path:'view', component:ViewStudentComponent},
  {path:'view/:id', component:ViewStudentComponent},
  {path:'viewById/:id', component:ViewStudentByIdComponent},
  {path:'update/:id',component: UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
