import { Component, OnInit } from '@angular/core';
import {Employee,EmployeeServiceService} from '../employee-service.service';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  user:Employee=new Employee('','');
  constructor(private httpclientservice:EmployeeServiceService) { }

  ngOnInit() {
  }

  createEmployee():void{
  	this.httpclientservice.createEmployees(this.user).subscribe(
  		data=>{
  			alert("Employee created successfully");
  		}
  		);
  }

}
