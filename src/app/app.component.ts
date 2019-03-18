import { Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'EmployeeCRUD';
  employees:String[];

  constructor(private httpclientservice:EmployeeServiceService){}

  ngOnInit(){
  	this.httpclientservice.getEmployees().subscribe(response=>this.display(response));
  }


  display(response){
  	this.employees=response;
  }
}
