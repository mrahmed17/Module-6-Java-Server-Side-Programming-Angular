import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave.model';

@Component({
  selector: 'app-leave-report',
  templateUrl: './leave-report.component.html',
  styleUrl: './leave-report.component.css'
})
export class LeaveReportComponent implements OnInit {
  // leaves: any[] = [];
   leaves: Leave[] = [];

  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.getLeaveReport();
    // this.loadLeaveData();
  }

  getLeaveReport(): void {
    this.leaveService.getAllLeaves().subscribe(
      (data: Leave[]) => {
        this.leaves = data;
      },
      (error) => {
        console.error('Error fetching leaves:', error);
      }
    );
  }

  // loadLeaveData(): void {
  //   this.leaveService.getAllLeaves().subscribe(
  //     (data: Leave[]) => {
  //       this.leaves = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching leave data', error);
  //     }
  //   );
  // }

}