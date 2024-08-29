import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { EmployeeModel } from '../../../models/employee.model';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css'],
})
export class EditemployeeComponent implements OnInit {
  employeeForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
      gender: ['Male', Validators.required],
      age: ['', Validators.required],
      nidNo: ['', Validators.required],
      department: ['', Validators.required],
      managerId: ['', Validators.required],
      hireDate: ['', Validators.required],
      payrollCalculationMethod: ['Weekly', Validators.required],
      overtimeExemption: [false],
      lastLogin: [new Date(), Validators.required],
      status: ['active', Validators.required],
      hourlyRate: ['', Validators.required],
      profilePhoto: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadEmployee();
  }

  loadEmployee(): void {
    this.loading = true;
    this.employeeService.getEmployeeById(this.id).subscribe(
      (employee: EmployeeModel) => {
        this.employeeForm.patchValue({
          ...employee,
          hireDate: this.formatDate(employee.hireDate),
          lastLogin: this.formatDate(employee.lastLogin),
        });
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load employee details.';
        this.loading = false;
        console.error('Failed to load employee', error);
      }
    );
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.loading = true;

      const updatedEmployee: Partial<EmployeeModel> = {
        ...this.employeeForm.value,
        updatedAt: new Date(), // Ensure `updatedAt` is included in the update
      };

      this.employeeService.updateEmployee(this.id, updatedEmployee).subscribe(
        () => {
          this.loading = false;
          this.router.navigate(['/employees/list']);
        },
        (error) => {
          this.errorMessage = 'Failed to update employee.';
          this.loading = false;
          console.error('Failed to update employee', error);
        }
      );
    }
  }

  resetForm(): void {
    this.employeeForm.reset();
  }

  cancel(): void {
    this.router.navigate(['/employees/list']);
  }

  private formatDate(date: Date | string): string {
    return new Date(date).toISOString().slice(0, 16); // Format date for input fields
  }
}
