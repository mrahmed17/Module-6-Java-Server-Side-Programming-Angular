import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-report',
  templateUrl: './feedback-report.component.html',
  styleUrl: './feedback-report.component.css'
})
export class FeedbackReportComponent implements OnInit {
  feedbacks: any[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getFeedbackReport();
  }

  getFeedbackReport(): void {
    this.feedbackService.getFeedbacks().subscribe(
      (data: any[]) => {
        this.feedbacks = data;
      },
      (error) => {
        console.error('Error fetching feedback report:', error);
      }
    );
  }
}