import { UserModel } from './user.model';

export class PerformanceModel {
  id!: string; // Unique identifier for the performance record

  goals!: boolean; // Check if the employee has achieved the goal
  achievements!: string; // Specific achievements during the review period
  reviewDate!: Date; // Date when the review was conducted
  rating!: number; // Example: 1 to 5 scale

  user!: UserModel; // Reference to UserModel

  comments!: string; // Areas of Improvement based on comments about the employee's performance
}
