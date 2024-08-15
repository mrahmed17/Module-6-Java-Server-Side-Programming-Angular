import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { CreateEditEmployeeComponent } from './components/employee/create-edit-employee/create-edit-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';

const routes: Routes = [
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'employees/create', component: CreateEditEmployeeComponent },
  { path: 'employees/edit/:id', component: CreateEditEmployeeComponent },
  { path: 'employees/:id', component: ViewEmployeeComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
