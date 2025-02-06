import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  fg!: FormGroup
  message: boolean = false
  emp!: Employee[]

  constructor(private fb: FormBuilder, private service: EmployeeService)
  {}

  ngOnInit(): void {
    // alert("hi")
    this.fg = this.fb.group(
      {
        name:['',[Validators.required]],
        phone:['',[Validators.required]]
      }
    )
  }

  onSubmit()
  {
    this.service.addEmployee(this.fg.value).subscribe((data)=>
    {
      // alert("Registered")
      this.message=true
      this.emp=data
      this.fg.reset()
    })
  }
}
