export class FeedbackModel {
  feedbackId: string;
  employeeId: string; // ID of the employee receiving the feedback
  managerId: string; // ID of the manager providing the feedback
  performanceRating: number; // Rating given by the manager (e.g., 1-5)
  comments: string; // Detailed comments or feedback
  date: Date; // Date when the feedback was given

  constructor(
    feedbackId: string,
    employeeId: string,
    managerId: string,
    performanceRating: number,
    comments: string,
    date: Date
  ) {
    this.feedbackId = feedbackId;
    this.employeeId = employeeId;
    this.managerId = managerId;
    this.performanceRating = performanceRating;
    this.comments = comments;
    this.date = date;
  }

  // Method to update feedback details
  updateFeedback(performanceRating: number, comments: string) {
    this.performanceRating = performanceRating;
    this.comments = comments;
  }

  // Method to get feedback details as a string
  getFeedbackDetails(): string {
    return `Feedback ID: ${this.feedbackId}\nEmployee ID: ${
      this.employeeId
    }\nManager ID: ${this.managerId}\nRating: ${
      this.performanceRating
    }\nComments: ${this.comments}\nDate: ${this.date.toDateString()}`;
  }
}
