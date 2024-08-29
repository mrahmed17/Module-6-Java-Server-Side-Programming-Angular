import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveService } from '../../../services/leave.service';
import { LeaveModel } from '../../../models/leave.model';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './editleave.component.html',
})
export class EditleaveComponent implements OnInit {
  leave: LeaveModel = new LeaveModel();
  errorMessage: string = '';
  submitting: boolean = false;
  leaveId: string | null = null;

  constructor(
    private leaveService: LeaveService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.leaveId = this.route.snapshot.paramMap.get('id');
    if (this.leaveId) {
      this.leaveService.getLeave(this.leaveId).subscribe(
        (leave) => (this.leave = leave),
        (error) => (this.errorMessage = 'Failed to load leave details.')
      );
    }
  }

  updateLeave(): void {
    if (this.leave && this.leaveId) {
      this.submitting = true;
      this.leaveService.updateLeave(this.leaveId, this.leave).subscribe(
        () => this.router.navigate(['/leaves']),
        (error) => {
          this.errorMessage = 'Failed to update leave request.';
          console.error('Error updating leave', error);
          this.submitting = false;
        }
      );
    } else {
      this.errorMessage = 'Leave details or ID is missing.';
    }
  }
}
