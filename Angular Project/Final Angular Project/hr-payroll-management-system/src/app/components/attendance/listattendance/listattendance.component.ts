import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../../../services/attendance.service';
import { AttendanceModel } from '../../../models/attendance.model';

@Component({
  selector: 'app-listattendance',
  templateUrl: './listattendance.component.html',
  styleUrls: ['./listattendance.component.css'],
})
export class ListattendanceComponent implements OnInit {
  attendances: AttendanceModel[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private attendanceService: AttendanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAttendances();
  }

  loadAttendances(): void {
    this.loading = true;
    this.attendanceService.getAllAttendances().subscribe(
      (attendances: AttendanceModel[]) => {
        this.attendances = attendances;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load attendances.';
        this.loading = false;
        console.error('Failed to load attendances', error);
      }
    );
  }

  // Navigate to the attendance details view
  viewAttendance(id: string): void {
    this.router.navigate([`/attendances/view/${id}`]);
  }

  // Navigate to the edit attendance page
  editAttendance(id: string): void {
    this.router.navigate([`/attendances/edit/${id}`]);
  }

  // Delete an attendance record
  deleteAttendance(id: string): void {
    if (confirm('Are you sure you want to delete this attendance record?')) {
      this.loading = true;
      this.attendanceService.deleteAttendance(id).subscribe(
        () => {
          this.attendances = this.attendances.filter(
            (attendance) => attendance.id !== id
          );
          this.loading = false;
        },
        (error) => {
          this.errorMessage = 'Failed to delete attendance record.';
          this.loading = false;
          console.error('Failed to delete attendance record', error);
        }
      );
    }
  }
}
