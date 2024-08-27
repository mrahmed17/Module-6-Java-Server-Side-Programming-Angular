import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';
import { forkJoin } from 'rxjs';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee[] = [];  // Ensure this is an Employee object, not an array
  department: Department[] = [];  // Ensure this is an array if you're using filter


  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    forkJoin({
      employee: this.employeeService.getAllEmployees(),
      department: this.departmentService.getDeprtForEmp(),
    }).subscribe({
      next: ({ department, employee }) => {
        this.employee = employee;
        this.department = department;
        // console.log(res)
      },
      error: error => { console.error('Error fetching employees', error) }
    }
    );
  }


  editEmployee(employee: Employee): void {
    this.router.navigate(['editemployee/:id', employee.id]);
    // Navigate to edit component or open a modal with employee data
  }

  deleteEmployee(employeeId: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe({
        next: res => {
          this.loadEmployees();
          this.router.navigate(['employee', res]);
          console.log('Employee deleted');
          this.notificationService.showNotification('Employee deleted successfully!');
        }, error: error => {
          console.log('Error deleting employee:', error);
          this.notificationService.showNotification('Error Deleting Employee');
        }
      });
    }
  }
}
