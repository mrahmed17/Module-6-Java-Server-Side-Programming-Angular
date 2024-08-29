export class PerformanceModel {
  performanceId: string; // Unique identifier for the performance record
  employeeId: string; // ID of the employee being evaluated
  managerId: string; // ID of the manager conducting the review
  goals: boolean; // Check if the employee has achieved the goal
  achievements: string; // Specific achievements during the review period
  reviewDate: Date; // Date when the review was conducted
  rating: number; // Rating on a scale from 1 to 5 stars
  comments: string; // Areas of improvement based on comments about the employee's performance

  constructor(
    performanceId: string,
    employeeId: string,
    managerId: string,
    goals: boolean,
    achievements: string,
    reviewDate: Date,
    rating: number,
    comments: string
  ) {
    this.performanceId = performanceId;
    this.employeeId = employeeId;
    this.managerId = managerId;
    this.goals = goals;
    this.achievements = achievements;
    this.reviewDate = reviewDate;
    this.rating = rating;
    this.comments = comments;
  }

  // Method to calculate performance bonuses based on rating
  calculatePerformanceBonus(): number {
    let bonus: number;

    switch (this.rating) {
      case 1:
        bonus = 200;
        break;
      case 2:
        bonus = 400;
        break;
      case 3:
        bonus = 600;
        break;
      case 4:
        bonus = 800;
        break;
      case 5:
        bonus = 1600;
        break;
      default:
        bonus = 0;
        console.error('Invalid rating. Bonus cannot be calculated.');
    }

    return bonus;
  }

  // Method to get performance details as a string
  getPerformanceDetails(): string {
    return `Performance ID: ${this.performanceId}\nEmployee ID: ${
      this.employeeId
    }\nManager ID: ${this.managerId}\nGoals Achieved: ${
      this.goals
    }\nAchievements: ${
      this.achievements
    }\nReview Date: ${this.reviewDate.toDateString()}\nRating: ${
      this.rating
    }\nComments: ${
      this.comments
    }\nPerformance Bonus: ${this.calculatePerformanceBonus()}`;
  }
}
