import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {

  employees:String[];

  constructor(private httpclientservice:EmployeeServiceService,private router:Router){}

  ngOnInit(){
  	this.httpclientservice.getEmployees().subscribe(response=>this.display(response));
  }


  display(response){
  	this.employees=response;
  }

  deleteEmployee(employee){
    this.httpclientservice.deleteEmployee(employee).subscribe(response=>{
      alert("Employee deleted successfully");
      this.employees = this.employees.filter(u => u !== employee);
    });
  }

  editEmployee(employee){
    /*this.httpclientservice.editEmployee(employee).subscribe(response=>
    {
      this.employees=response;
      this.router.navigate
    });*/
      this.router.navigate(['updateEmployee',employee]);
  
}
}
