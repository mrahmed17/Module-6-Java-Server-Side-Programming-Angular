import { UserModel } from './user.model';

export class FeedbackModel {
  id!: string;
  userName!: UserModel; // Optional: Link feedback to a user
  rating!: number; //user rating will show here
  comments!: string; // user comments
  feedbackDate!: Date; //feedback creation date
}
