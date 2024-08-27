export class FeedbackModel {
  id!: string;

  UserModel!: {
    id: string;
    firstName: string | undefined;
    lastName: string | undefined;
    role: 'HR' | 'Employee' | undefined;
    profilePhoto: string | undefined;
  };

  rating!: number; //  User rating will be shown here. 1 to 5 scale
  comments!: string; //  User comments
  feedbackDate!: Date; //  Feedback creation date
}

// export class FeedbackModel {
//   id!: string;

//   UserModel!: {
//     firstName: string | undefined;
//     lastName: string | undefined;
//     role: 'HR' | 'Employee' | undefined;
//     profilePhoto: string | undefined;
//   };

//   rating!: number; //user rating will show here
//   comments!: string; // user comments
//   feedbackDate!: Date; //feedback creation date
// }
