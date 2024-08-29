import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../../../services/manager.service';
import { ManagerModel } from '../../../models/manager.model';

@Component({
  selector: 'app-editmanager',
  templateUrl: './editmanager.component.html',
  styleUrls: ['./editmanager.component.css'],
})
export class EditmanagerComponent implements OnInit {
  managerForm: FormGroup;
  managerId: string | null = null;
  submissionError: string | null = null;
  loading = true;

  constructor(
    private fb: FormBuilder,
    private managerService: ManagerService,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.managerId = params['id'];
      if (this.managerId) {
        this.managerService.getManagerById(this.managerId).subscribe(
          (data: ManagerModel) => {
            this.managerForm.patchValue(data);
            this.loading = false;
          },
          (error) => {
            this.submissionError = 'Failed to load manager details.';
            this.loading = false;
            console.error('Edit Manager Error:', error);
          }
        );
      }
    });
  }

  onSubmit(): void {
    if (this.managerForm.invalid) {
      return;
    }

    const formValue = this.managerForm.value;
    this.managerService
      .updateManager(this.managerId as string, formValue)
      .subscribe(
        () => {
          this.router.navigate(['/managers/list']);
        },
        (error) => {
          this.submissionError = 'Failed to update manager. Please try again.';
          console.error('Update Manager Error:', error);
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
