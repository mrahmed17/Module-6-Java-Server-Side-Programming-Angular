import { UserModel } from './user.model';

export class FeedbackModel {
  id!: string; // Primary Key

  user!: UserModel; // Reference to UserModel

  rating!: number; // User rating will be shown here. 1 to 5 scale
  comments!: string; // User comments
  feedbackDate!: Date; // Feedback creation date
}
