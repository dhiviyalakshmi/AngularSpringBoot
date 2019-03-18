import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/Common/http';

@Injectable({
  providedIn: 'root'
})

export class Employee{
	 constructor(public empid:String,
	 	public empname:String,){}
}


export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }

  getEmployees(){
    return this.httpClient.get<Employee[]>('http://localhost:8000/')
  }
}
