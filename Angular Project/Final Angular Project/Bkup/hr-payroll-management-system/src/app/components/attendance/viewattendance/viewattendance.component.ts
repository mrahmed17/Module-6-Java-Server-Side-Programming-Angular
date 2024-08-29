import { Component, OnInit } from '@angular/core';
import { AttendanceModel } from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.css'],
})
export class ViewattendanceComponent implements OnInit {
  attendance: AttendanceModel | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadAttendance(id);
    }
  }

  // Load a single attendance record
  loadAttendance(id: string): void {
    this.attendanceService.getAttendance(id).subscribe(
      (data) => {
        this.attendance = data;
      },
      (error) => {
        console.error('Failed to load attendance details', error);
        this.errorMessage =
          'Failed to load attendance details. Please try again.';
      }
    );
  }

  // Navigate back to the list
  goBack(): void {
    this.router.navigate(['/attendance/list']);
  }
}
