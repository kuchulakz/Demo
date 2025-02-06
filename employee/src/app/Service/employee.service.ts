import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl="https://friendly-computing-machine-7qj4vwvw9q3rrvx-3000.app.github.dev/employee"

  constructor(private http: HttpClient) { }

  addEmployee(emp: Employee): Observable<any>
  {
    return this.http.post(this.apiUrl,emp)
  }

  viewAll():Observable<any>
  {
    return this.http.get(this.apiUrl)
  }
}
