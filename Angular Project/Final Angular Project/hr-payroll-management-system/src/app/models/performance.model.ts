export class PerformanceModel {
  id!: string; //  Unique identifier for the performance record
  goals!: boolean; //  Check if the employee has achieved the goal
  achievements!: string; //  Specific achievements during the review period
  reviewDate!: Date; //  Date when the review was conducted
  rating!: number; //  Example: 1 to 5 scale

  UserModel!: {
    id: string;
    firstName: string | undefined;
    lastName: string | undefined;
    role: 'HR' | 'Employee' | undefined;
    profilePhoto: string | undefined;
  };

  comments!: string; //  Areas of Improvement based on comments about the employee's performance
}

// export class PerformanceModel {
//   id!: string; //Unique identifier for the performance record

//   goals!: boolean; // Check is he or she achieve the goal

//   achievements!: string; //Specific achievements during the review period.

//   reviewDate!: Date; //Date when the review was conducted.

//   rating!: number; // Example: 1 to 5 scale

//   UserModel!: {
//     firstName: string | undefined;
//     lastName: string | undefined;
//     role: 'HR' | 'Employee' | undefined;
//     profilePhoto: string | undefined;
//   };

//   comments!: string; // Areas Of Improvement base comments about the employee's performance.
// }
