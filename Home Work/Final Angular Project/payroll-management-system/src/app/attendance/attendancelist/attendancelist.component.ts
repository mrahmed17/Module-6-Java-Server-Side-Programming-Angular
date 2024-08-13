import { Component, OnInit } from '@angular/core';
import { Attendance } from '../../models/attendance.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AttendanceService } from '../../services/attendance.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrl: './attendancelist.component.css'
})
export class AttendancelistComponent implements OnInit {

  attendanceForm: FormGroup;
  attendances: Attendance[] = [];

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
      date: ['']
    });
  }

  ngOnInit(): void {
    this.loadAttendances();
  }


  loadAttendances() {
    this.attendanceService.getAttendances().subscribe(data => {
      this.attendances = data;
    });
  }

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const newAttendance: Attendance = this.attendanceForm.value;
      this.attendanceService.createAttendance(newAttendance).subscribe({
        next: response => {
          console.log('Attendance created:', response);
          this.notificationService.showNotification('Attendance added successfully!');
          this.router.navigate(['/attendances']);
        },
        error: error => {
          console.error('Error creating attendance:', error);
          this.notificationService.showNotification('Failed to add attendance. Please try again.');
        }
      });
    } else {
      this.notificationService.showNotification('Please fill in all required fields.');
    }
  }



}
