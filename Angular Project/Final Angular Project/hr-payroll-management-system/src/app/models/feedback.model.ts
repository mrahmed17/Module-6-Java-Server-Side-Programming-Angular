import { UserModel } from '../models/user.model';

export class FeedbackModel {
  id?: string;
  user!: UserModel;
  rating!: number;
  comments!: string;
  feedbackDate!: Date;
}
