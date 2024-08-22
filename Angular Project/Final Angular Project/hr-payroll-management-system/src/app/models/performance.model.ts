import { UserModel } from '../models/user.model';

export class PerformanceModel {
  id!: string;
  reviewDate!: Date;
  score!: number;
  comments!: string;
  user!: UserModel;
}
