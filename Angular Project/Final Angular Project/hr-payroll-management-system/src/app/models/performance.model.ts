import { UserModel } from './user.model';

export class PerformanceModel {
  id!: string; //Unique identifier for the performance record
  reviewPeriod!: string; //Specifies the period for which the review is being conducted (e.g., Q1 2024).
  rating!: number; // Example: 1 to 5 scale
  comments!: string; // General comments about the employee's performance.
  goals!: string; //Goals set for the employee for the review period.
  achievements!: string; //Specific achievements during the review period.
  areasOfImprovement!: string; //Areas where the employee can improve.
  reviewDate!: Date; //Date when the review was conducted.
  createdAt!: Date; //Timestamp when the record was created.
  updatedAt!: Date; //Timestamp when the record was last updated.

  UserModel!: {
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
  };
}
