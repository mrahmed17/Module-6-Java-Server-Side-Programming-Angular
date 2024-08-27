import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrl: './employee-report.component.css'
})
export class EmployeeReportComponent {
 employees: any[] = [];
//  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployeeReports();
    this.loadEmployeeData();
  }

  loadEmployeeReports() {
    // Placeholder for loading employee report data
    this.employees = [
      { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', status: 'Active' },
      { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Marketing', status: 'Active' },
      { id: 3, name: 'Michael Brown', position: 'Manager', department: 'Sales', status: 'Inactive' }
    ];
  }

  loadEmployeeData(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employee data', error);
      }
    );
  }

}
