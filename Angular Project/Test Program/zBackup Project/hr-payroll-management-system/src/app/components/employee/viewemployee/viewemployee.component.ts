import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { DepartmentService } from '../../../services/department.service';
import { LocationService } from '../../../services/location.service';
import { UserprofileService } from '../../../services/userprofile.service';
import { EmployeeModel } from '../../../models/employee.model';
import { DepartmentModel } from '../../../models/department.model';
import { LocationModel } from '../../../models/location.model';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css'],
})
export class ViewemployeeComponent implements OnInit {
  employee!: EmployeeModel;
  location?: LocationModel;
  department?: DepartmentModel;
  user?: UserModel;
  departmentName: string | undefined;
  locationName: string | undefined;
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private locationService: LocationService,
    private departmentService: DepartmentService,
    private userprofileService: UserprofileService
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');

    if (employeeId) {
      this.employeeService.getEmployeeById(employeeId).subscribe({
        next: (employee) => {
          this.employee = employee;
          this.loadAdditionalDetails();
        },
        error: (err) => {
          console.error('Error fetching employee:', err);
          this.errorMessage = 'Error fetching employee details';
        },
      });
    }
  }

  // Load additional details such as department, location, and user profile
  private loadAdditionalDetails(): void {
    if (this.employee) {
      // Load department details
      if (this.employee.DepartmentModel.id) {
        this.departmentService
          .getDepartmentById(this.employee.DepartmentModel.id)
          .subscribe({
            next: (department) => {
              this.department = department;
              this.departmentName = department.departmentName;
            },
            error: (err) => {
              console.error('Error fetching department:', err);
              this.errorMessage = 'Error fetching department details';
            },
          });
      }

      // Load location details
      if (this.employee.LocationModel.id) {
        this.locationService
          .getLocationById(this.employee.LocationModel.id)
          .subscribe({
            next: (location) => {
              this.location = location;
              this.locationName = location.locationName;
            },
            error: (err) => {
              console.error('Error fetching location:', err);
              this.errorMessage = 'Error fetching location details';
            },
          });
      }

      // Load user profile details
      if (this.employee.UserModel.id) {
        this.userprofileService.getUserProfile().subscribe({
          next: (userProfile) => {
            if (userProfile && userProfile.id === this.employee.UserModel.id) {
              this.user = userProfile;
            } else {
              this.errorMessage = 'User profile not found';
            }
          },
          error: (err) => {
            console.error('Error fetching user profile:', err);
            this.errorMessage = 'Error fetching user profile';
          },
        });
      }
    }
  }

  // Navigate back to the list
  goBack(): void {
    this.router.navigate(['/employee/list']);
  }
}
