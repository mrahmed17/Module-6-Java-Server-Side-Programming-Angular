import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AttendanceModel } from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../template/notification/notification.service';

@Component({
  selector: 'app-listattendance',
  templateUrl: './listattendance.component.html',
  styleUrl: './listattendance.component.css',
})
export class ListattendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  attendances: AttendanceModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private attendanceService: AttendanceService,
    private notificationService: NotificationService
  ) {
    this.attendanceForm = this.fb.group({
      // Define form controls here
      employeeId: [''],
      amount: [''],
      date: [''],
    });
  }

  ngOnInit(): void {
    this.loadAttendances();
  }

  loadAttendances() {
    this.attendanceService.getAllAttendances().subscribe((data) => {
      this.attendances = data;
    });
  }

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const newAttendance: AttendanceModel = this.attendanceForm.value;
      this.attendanceService.createAttendance(newAttendance).subscribe({
        next: (response) => {
          console.log('Attendance created:', response);
          this.notificationService.showNotification(
            'Attendance added successfully!'
          );
          this.router.navigate(['/attendances']);
        },
        error: (error) => {
          console.error('Error creating attendance:', error);
          this.notificationService.showNotification(
            'Failed to add attendance. Please try again.'
          );
        },
      });
    } else {
      this.notificationService.showNotification(
        'Please fill in all required fields.'
      );
    }
  }
}
