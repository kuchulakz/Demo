import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit
{
  fg!:FormGroup
  status: boolean= false
  student=[]

  constructor(private fb: FormBuilder, private service: StudentService)
  {}

  ngOnInit(): void {
    this.fg = this.fb.group(
      {
        name:['',[Validators.required]],
        phone:['',[Validators.required, Validators.maxLength(10),this.phoneVal]],
        dob:['',[Validators.required,this.dobVal]]
      }
    )
  }

  phoneVal(con: AbstractControl): ValidationErrors| null
  {
    const pattern = /^[6-9]\d{9}$/
    if(!pattern.test(con.value))
    {
      return {ret:true}
    }
    return null
  }

  dobVal(con: AbstractControl): ValidationErrors | null
  {
    const pattern = /^\d{2}-\d{2}-\d{4}$/
    if(!pattern.test(con.value))
    {
      return {ret:true}
    }
    return null
  }

  onSubmit()
  {
    console.log('Added')
    this.status= true
    if(this.fg.valid)
    {
      console.log(this.fg.value)
      this.service.addStudent(this.fg.value).subscribe
      (
        () => {this.student}
      )
      this.fg.reset()
    }
  }

}
