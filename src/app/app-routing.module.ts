import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {DisplayemployeeComponent} from './displayemployee/displayemployee.component';
import {UpdateemployeeComponent} from './updateemployee/updateemployee.component';


const routes: Routes = [
 { path:'', component: DisplayemployeeComponent},
 { path:'add', component: AddemployeeComponent},
 { path:'updateEmployee', component: UpdateemployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
