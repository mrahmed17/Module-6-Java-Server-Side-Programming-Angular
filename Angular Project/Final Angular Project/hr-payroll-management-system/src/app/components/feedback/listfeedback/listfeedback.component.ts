import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../services/feedback.service';
import { FeedbackModel } from '../../../models/feedback.model';

@Component({
  selector: 'app-listfeedback',
  templateUrl: './listfeedback.component.html',
  styleUrls: ['./listfeedback.component.css'],
})
export class ListfeedbackComponent implements OnInit {
  feedbacks: FeedbackModel[] = [];
  errorMessage: string = '';
  loading: boolean = true;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe(
      (feedbacks) => {
        this.feedbacks = feedbacks;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load feedbacks.';
        console.error('Error loading feedbacks', error);
        this.loading = false;
      }
    );
  }

  deleteFeedback(feedbackId: string): void {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedback(feedbackId).subscribe(
        () => {
          this.feedbacks = this.feedbacks.filter(
            (fb) => fb.feedbackId !== feedbackId
          );
          alert('Feedback deleted successfully.');
        },
        (error) => {
          this.errorMessage = 'Failed to delete feedback.';
          console.error('Error deleting feedback', error);
        }
      );
    }
  }
}
