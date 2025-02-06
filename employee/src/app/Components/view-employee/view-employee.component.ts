import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit
{
  data$: Observable<any> = of([])
  filterData$: Observable<any> = of([])

  constructor(private service:EmployeeService)
  {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll()
  {
    this.data$=this.service.viewAll()
    this.filterData$=this.data$.pipe(
      map(d=>d.sort((a:Employee,b:Employee)=> a.name.toString().localeCompare(b.name.toString()))
    ))
  }

  getFilterData(e: any):any
  {
    let data = e.target.value.toLowerCase()
    console.log(data)
    if(data)
    {
      this.filterData$=this.data$.pipe(
        map((employees)=>
        {return employees.filter((employee:any)=>
        {return employee.name.toLowerCase().includes(data)})})
      )
    }
    else
    {
      this.filterData$= this.data$
      return
    }
  }

}
