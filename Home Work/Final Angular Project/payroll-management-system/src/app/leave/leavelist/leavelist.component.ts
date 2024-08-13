import { Component, OnInit } from '@angular/core';
import { Leave } from '../../models/leave.model';
import { LeaveService } from '../../services/leave.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrl: './leavelist.component.css'
})
export class LeavelistComponent implements OnInit {
  leaves: Leave[] = [];

  constructor(
    private leaveService: LeaveService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.loadLeaves();
  }

  loadLeaves(): void {
    this.leaveService.getAllLeaves().subscribe({
      next: data => { this.leaves = data; },
      error: error => { console.error('Error fetching leaves:', error); }
    });
  }

  deleteLeave(id: number): void {
    if (confirm('Are you sure you want to delete this leave?')) {
      this.leaveService.deleteLeave(id).subscribe({
        next: () => {
          this.notificationService.showNotification('Leave deleted successfully!');
          this.loadLeaves();
        },
        error: error => {
          console.error('Error deleting leave:', error);
          this.notificationService.showNotification('Failed to delete leave. Please try again.');
        }
      });
    }
  }
}