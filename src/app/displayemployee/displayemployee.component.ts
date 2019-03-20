import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {

  employees:String[];

  constructor(private httpclientservice:EmployeeServiceService){}

  ngOnInit(){
  	this.httpclientservice.getEmployees().subscribe(response=>this.display(response));
  }


  display(response){
  	this.employees=response;
  }

  deleteEmployee(employee:Employee){
    this.httpclientservice.deleteEmployee(employee).subscribe(response=>{
      alert("Employee deleted successfully");
      this.employees = this.employees.filter(u => u !== employee);
    });
  }
}
