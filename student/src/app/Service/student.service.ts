import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Model/student';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class StudentService 
{
  apiUrl = 'https://friendly-computing-machine-7qj4vwvw9q3rrvx-3000.app.github.dev/studnet'
  
  constructor(private http: HttpClient) { }

  addStudent(st:Student):Observable<any>
  {
    return this.http.post(this.apiUrl,st)
  }

  viewStudnet(): Observable<any>
  {
    return this.http.get(this.apiUrl)
  }

  viewStudentById(id: any):Observable<any>
  {
    return this.http.get(this.apiUrl+"/"+id)
  }

  deleteStudent(id: any):Observable<any>
  {
    return this.http.delete(this.apiUrl+"/"+id)
  }

  updateStudent(id:any, st:Student):Observable<any>
  {
    return this.http.put(this.apiUrl+"/"+id,st)
  }
}
