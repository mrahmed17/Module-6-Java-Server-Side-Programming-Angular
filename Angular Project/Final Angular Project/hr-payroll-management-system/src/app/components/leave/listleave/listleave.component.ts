import { Component, OnInit } from '@angular/core';
import { LeaveModel } from '../../../models/leave.model';
import { LeaveService } from '../../../services/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listleave',
  templateUrl: './listleave.component.html',
  styleUrls: ['./listleave.component.css'],
})
export class ListleaveComponent implements OnInit {
  leaves: LeaveModel[] = [];
  errorMessage: string = '';

  constructor(private leaveService: LeaveService, private router: Router) {}

  ngOnInit(): void {
    this.fetchLeaves();
  }

  fetchLeaves(): void {
    this.leaveService.getAllLeaves().subscribe(
      (data) => (this.leaves = data),
      (error) => {
        this.errorMessage = 'Failed to load leave requests.';
        console.error('Error loading leaves', error);
      }
    );
  }

  editLeave(id: string): void {
    this.router.navigate(['/leaves/edit', id]);
  }

  deleteLeave(id: string): void {
    if (confirm('Are you sure you want to delete this leave request?')) {
      this.leaveService.deleteLeave(id).subscribe(
        () => this.fetchLeaves(),
        (error) => {
          this.errorMessage = 'Failed to delete leave request.';
          console.error('Error deleting leave', error);
        }
      );
    }
  }
}
