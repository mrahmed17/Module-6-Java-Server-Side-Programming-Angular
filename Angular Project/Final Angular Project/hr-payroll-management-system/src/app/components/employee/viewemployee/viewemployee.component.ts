import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { DepartmentService } from '../../../services/department.service';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrl: './viewemployee.component.css',
})
export class ViewemployeeComponent implements OnInit {
  employee!: EmployeeModel;
  departmentName: string | undefined;
  locationName: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');

    if (employeeId) {
      this.employeeService.getEmployeeById(employeeId).subscribe({
        next: (employee) => {
          this.employee = employee;
          this.loadAdditionalDetails();
        },
        error: (err) => console.error('Error fetching employee:', err),
      });
    }
  }

  // Load a single employee record
  private loadAdditionalDetails(): void {
    if (this.employee) {
      this.departmentService
        .getDepartmentById(this.employee.departmentId)
        .subscribe({
          next: (department) =>
            (this.departmentName = department.departmentName),
          error: (err) => console.error('Error fetching department:', err),
        });

      this.locationService.getLocationById(this.employee.locationId).subscribe({
        next: (location) => (this.locationName = location.locationName),
        error: (err) => console.error('Error fetching location:', err),
      });
    }
  }
  // Navigate back to the list
  goBack(): void {
    this.router.navigate(['/employee/list']);
  }
}
