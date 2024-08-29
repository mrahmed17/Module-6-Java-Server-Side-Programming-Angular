import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from '../../../services/attendance.service';
import { AttendanceModel } from '../../../models/attendance.model';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.css'],
})
export class ViewattendanceComponent implements OnInit {
  attendance: AttendanceModel | null = null;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private attendanceService: AttendanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.loading = true;
    this.attendanceService.getAttendanceById(id).subscribe(
      (attendance: AttendanceModel) => {
        this.attendance = attendance;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load attendance details.';
        this.loading = false;
        console.error('Failed to load attendance details', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/attendances']);
  }
}
