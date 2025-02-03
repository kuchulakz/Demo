import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit
{
  fg!:FormGroup
  status: boolean= false
  student=[]
  id !: string

  constructor(private fb: FormBuilder, private service: StudentService,private actroute:ActivatedRoute, private route:Router)
  {}

  ngOnInit(): void {
    this.fg = this.fb.group(
      {
        name:['',[Validators.required]],
        phone:['',[Validators.required, Validators.maxLength(10),this.phoneVal]],
        dob:['',[Validators.required,this.dobVal]]
      }
    )
    this.id = String(this.actroute.snapshot.paramMap.get('id'))
    if(this.id)
    {
      this.service.viewStudentById(this.id).subscribe(
        (data)=>{this.fg.patchValue(data)}
      )
    }
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

  updateStudent()
  {
    console.log('update')
    this.service.updateStudent(this.id,this.fg.value).subscribe(()=>
    {
      alert("Updated Successfully")
      this.route.navigate(['/view'])
    })
  }

}
