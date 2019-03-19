import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})




export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }

  getEmployees(){
  	console.log("came");
    return this.httpClient.get<Employee[]>('http://localhost:8080/')
  }
}

export class Employee{
	 constructor(public empId:String,
	 	public name:String,){}
}

