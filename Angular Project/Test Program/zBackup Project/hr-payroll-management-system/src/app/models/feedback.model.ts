export class FeedbackModel {
  id!: string;

  UserModel!: {
    firstName: string | undefined;
    lastName: string | undefined;
    role: 'HR' | 'Employee' | undefined;
    profilePhoto: string | undefined;
  };

  rating!: number; //user rating will show here
  comments!: string; // user comments
  feedbackDate!: Date; //feedback creation date
}
