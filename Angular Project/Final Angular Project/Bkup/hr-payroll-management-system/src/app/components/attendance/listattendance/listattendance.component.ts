import { Component, OnInit } from '@angular/core';
import { AttendanceModel } from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listattendance',
  templateUrl: './listattendance.component.html',
  styleUrls: ['./listattendance.component.css'],
})
export class ListattendanceComponent implements OnInit {
  attendances: AttendanceModel[] = [];
  errorMessage: string = '';

  constructor(
    private attendanceService: AttendanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAttendances();
  }

  // Load all attendance records
  loadAttendances(): void {
    this.attendanceService.getAllAttendances().subscribe(
      (data) => {
        this.attendances = data;
      },
      (error) => {
        console.error('Failed to load attendance records', error);
        this.errorMessage =
          'Failed to load attendance records. Please try again.';
      }
    );
  }

  // Edit an existing attendance record
  editAttendance(attendance: AttendanceModel): void {
    this.router.navigate(['/edit-attendance', attendance.id]);
  }

  // Delete an attendance record
  deleteAttendance(id: string): void {
    if (confirm('Are you sure you want to delete this attendance record?')) {
      this.attendanceService.deleteAttendance(id).subscribe(
        () => {
          this.loadAttendances();
        },
        (error) => {
          console.error('Failed to delete attendance', error);
          this.errorMessage = 'Failed to delete attendance. Please try again.';
        }
      );
    }
  }
}
