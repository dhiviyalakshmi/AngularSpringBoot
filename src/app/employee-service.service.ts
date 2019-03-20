import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Employee{
	 constructor(public empId:String,
	 	public name:String,){}
}


@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }

  public getEmployees(){
    return this.httpClient.get<Employee[]>('http://localhost:8080/')
  }

  public createEmployees(employee){
  	  	return this.httpClient.post<Employee>('http://localhost:8080/addemployee',employee);
  }

  public deleteEmployee(employee){
   return this.httpClient.delete<Employee>("http://localhost:8080/deleteemployee/"+employee.empId);
  }
}


