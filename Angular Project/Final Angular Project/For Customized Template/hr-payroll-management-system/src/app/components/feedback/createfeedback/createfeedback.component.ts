import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackModel } from '../feedback.model';
import { FeedbackService } from '../../feedback/feedback.service';

@Component({
  selector: 'app-createfeedback',
  templateUrl: './createfeedback.component.html',
  styleUrls: ['./createfeedback.component.css']
})
export class CreatefeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  feedback: FeedbackModel = new FeedbackModel();
  isSubmitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.feedbackForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      departmentId: ['', Validators.required],
      employeeName: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['', Validators.required],
      feedbackDate: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.feedbackForm.invalid) {
      return;
    }

    this.feedback = this.feedbackForm.value;

    this.feedbackService.createFeedback(this.feedback).subscribe(
      (data) => {
        console.log('Feedback created successfully:', data);
        this.resetForm();
      },
      (error) => {
        console.error('Error creating feedback:', error);
        this.errorMessage = 'An error occurred while creating the feedback. Please try again.';
      }
    );
  }

  resetForm() {
    this.isSubmitted = false;
    this.feedbackForm.reset();
  }
}
