import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../../../services/leave.service';
import { LeaveModel } from '../../../models/leave.model';

@Component({
  selector: 'app-createleave',
  templateUrl: './createleave.component.html',
  styleUrls: ['./createleave.component.css'],
})
export class CreateleaveComponent implements OnInit {
  leave: LeaveModel = new LeaveModel(
    '',
    '',
    'Sick',
    new Date(),
    new Date(),
    0,
    '',
    'Pending',
    new Date()
  );
  submitting: boolean = false;
  errorMessage: string | null = null;

  constructor(private leaveService: LeaveService, private router: Router) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Method to create a new leave request
  createLeave(): void {
    if (this.validateLeave(this.leave)) {
      this.submitting = true;
      this.leaveService.createLeave(this.leave).subscribe(
        () => {
          this.router.navigate(['/leaves']);
        },
        (error) => {
          this.errorMessage = 'Failed to create leave request.';
          console.error('Error creating leave request', error);
          this.submitting = false;
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }

  // Basic validation for the leave request
  private validateLeave(leave: LeaveModel): boolean {
    return (
      leave.employeeId.trim() !== '' &&
      leave.startDate <= leave.endDate &&
      leave.reason.trim() !== ''
    );
  }
}
