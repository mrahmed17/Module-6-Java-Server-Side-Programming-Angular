import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-createmanager',
  templateUrl: './createmanager.component.html',
  styleUrls: ['./createmanager.component.css'],
})
export class CreatemanagerComponent implements OnInit {
  managerForm: FormGroup;
  submissionError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private managerService: ManagerService,
    private router: Router
  ) {
    this.managerForm = this.fb.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      gender: ['Male', Validators.required],
      age: ['', Validators.required],
      nidNo: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      department: ['', Validators.required],
      assignedEmployees: [[]],
      hireDate: ['', Validators.required],
      payrollCalculationMethod: ['Monthly', Validators.required],
      lastLogin: ['', Validators.required],
      status: ['active', Validators.required],
      hourlyRate: [0, [Validators.required, Validators.min(0)]],
      profilePhoto: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.managerForm.invalid) {
      return;
    }

    const formValue = this.managerForm.value;
    this.managerService
      .createManager(
        formValue.username,
        formValue.fullName,
        formValue.email,
        formValue.contactNumber,
        formValue.gender,
        formValue.age,
        formValue.nidNo,
        formValue.department,
        formValue.assignedEmployees,
        new Date(formValue.hireDate),
        formValue.payrollCalculationMethod,
        new Date(formValue.lastLogin),
        formValue.status,
        formValue.hourlyRate,
        formValue.profilePhoto
      )
      .subscribe(
        () => {
          this.router.navigate(['/managers/list']);
        },
        (error) => {
          this.submissionError = 'Failed to create manager. Please try again.';
          console.error('Create Manager Error:', error);
        }
      );
  }

  resetForm(): void {
    this.managerForm.reset();
  }

  cancel(): void {
    this.router.navigate(['/managers/list']);
  }
}
