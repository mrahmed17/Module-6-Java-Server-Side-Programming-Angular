export class FeedbackModel {
  id?: string;
  employeeId!: number;
  departmentId!: number;
  employeeName!: string;
  rating!: number;
  comments!: string;
  feedbackDate!: Date;
}