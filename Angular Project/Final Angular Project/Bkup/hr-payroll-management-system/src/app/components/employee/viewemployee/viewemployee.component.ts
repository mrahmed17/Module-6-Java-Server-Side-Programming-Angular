import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { EmployeeModel } from '../../../models/employee.model';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css'],
})
export class ViewemployeeComponent implements OnInit {
  employee: EmployeeModel | null = null;
  loading = false;
  errorMessage: string | null = null;
  id: string | null = null;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id'); // Get id from route
    if (this.id) {
      this.loadEmployee(this.id); // Load employee if id is available
    } else {
      this.errorMessage = 'Employee ID is missing.';
    }
  }

  loadEmployee(id: string): void {
    this.loading = true;
    this.employeeService.getEmployeeById(id).subscribe(
      (employee: EmployeeModel) => {
        this.employee = employee;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load employee details.';
        this.loading = false;
        console.error('Failed to load employee', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/employees/list']);
  }
}
