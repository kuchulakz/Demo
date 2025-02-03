import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit
{
  data$ : Observable<any[]> = of([])
  filterData$ : Observable<any[]> = of([])
  id !: string

  constructor(private service: StudentService, private actRoute: ActivatedRoute, private route:Router)
  {}

  ngOnInit(): void {
    this.viewAll()
    this.id = String(this.actRoute.snapshot.paramMap.get('id'))
    if(this.id)
    {
      this.deleteStudent(this.id)
    }
  }

  viewAll()
  {
    this.data$ = this.service.viewStudnet()
    this.filterData$ = this.data$.pipe
    (
      map(d => d.sort((a:Student,b:Student) => b.phone.toString().localeCompare(a.phone.toString())))
    );
  }

  searchValue(event: any)
  {
    // console.log(event.target.value)
    const value =event.target.value
    // console.log(value)
    if(value)
    {
      this.filterData$ = this.data$.pipe(
        map((students) => 
        {
          return students.filter(student => {return student.id.toString().includes(value) || student.name.toString().includes(value)})
        })
      )
    }
    else
    {
      this.filterData$ =this.data$
      return
    }
  }

  deleteStudent(id: any)
  {
    this.service.deleteStudent(id).subscribe(()=>
    {
      alert("Deleted Successfully")
      this.route.navigate(['/view'])
    })    
  }
}
