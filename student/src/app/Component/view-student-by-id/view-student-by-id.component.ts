import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-view-student-by-id',
  templateUrl: './view-student-by-id.component.html',
  styleUrls: ['./view-student-by-id.component.css']
})
export class ViewStudentByIdComponent 
{
  stud$ !: Student 

  constructor(private service:StudentService, private router: ActivatedRoute)
  {}

  ngOnInit(): void 
  {
    this.router.params.subscribe((data)=>{
      const id = data['id']
      this.viewById(id)
    })    
  }

  viewById(id: any)
  {
    this.service.viewStudentById(id).subscribe((data)=>
    {
      this.stud$ = data
      console.log(this.stud$)
    })
  }

}
