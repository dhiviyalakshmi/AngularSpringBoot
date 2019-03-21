import { Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Employee,EmployeeServiceService} from '../employee-service.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent  {
   updateuser:Employee= new Employee('','');
   updateEmpId:number;
  constructor(private route:ActivatedRoute,private httpclientservice:EmployeeServiceService,private router:Router) {
  	this.updateuser.empId=this.route.snapshot.paramMap.get('empId');
  	this.updateEmpId=parseInt(this.updateuser.empId.toString());
  	this.updateuser.name=this.route.snapshot.paramMap.get('name');
  }
  updateEmployee()
  {
  	this.httpclientservice.editEmployee(this.updateEmpId,this.updateuser).subscribe(data=>{
  			alert("Employee Updated successfully");
  			this.router.navigate(['']);
  		});
  }

}
