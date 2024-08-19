import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrl: './create-department.component.css'
})
export class CreateDepartmentComponent implements OnInit {
  departmentForm: FormGroup;
  departments: Department[] = [];
  employees: Employee[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService
  ) {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }
  ngOnInit(): void {
    this.initDepartmentForm();
    this.loadDepartments();
    this.loadEmployees();
  }
  initDepartmentForm() {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      head: ['', Validators.required]
    });
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load departments';
        console.error(error);
      }
    });
  }

  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load employees';
        console.error(error);
      }
    });
  }


  onSubmit() {
    if (this.departmentForm.valid) {
      this.departmentService.createDepartment(this.departmentForm.value).subscribe({
        next: (response) => {
          this.resetForm();
          this.loadDepartments();
        },
        error: (error) => {
          this.errorMessage = 'Failed to create department';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields';
    }
  }

  resetForm() {
    this.departmentForm.reset();
  }
}


