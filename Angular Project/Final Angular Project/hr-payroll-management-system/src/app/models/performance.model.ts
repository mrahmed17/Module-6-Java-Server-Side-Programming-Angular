import { UserModel } from './user.model';

export class PerformanceModel {
  id!: string; //Unique identifier for the performance record
  employeeId!: UserModel; //Reference to the employee who is being reviewed.
  reviewer!: UserModel; //Name of the person conducting the review.
  reviewPeriod!: string; //Specifies the period for which the review is being conducted (e.g., Q1 2024).
  rating!: number; // Example: 1 to 5 scale
  comments!: string; // General comments about the employee's performance.
  goals!: string; //Goals set for the employee for the review period.
  achievements!: string; //Specific achievements during the review period.
  areasOfImprovement!: string; //Areas where the employee can improve.
  reviewDate!: Date; //Date when the review was conducted.
  createdAt!: Date; //Timestamp when the record was created.
  updatedAt!: Date; //Timestamp when the record was last updated.
}

// // i// performance.model.ts
// import { Injectable } from '@angular/core';
// import { Employee } from './employee.interface';
// import { PerformanceReview } from './performance-review.interface';
// import { Goal } from './goal.interface';

// @Injectable({
//   providedIn: 'root',
// })
// export class PerformanceModel {
//   private employees: Employee[] = [];
//   private performanceReviews: PerformanceReview[] = [];
//   private goals: Goal[] = [];

//   constructor() {}

//   // CRUD operations for employees
//   getEmployees(): Employee[] {
//     return this.employees;
//   }

//   getEmployee(id: number): Employee | undefined {
//     return this.employees.find((employee) => employee.id === id);
//   }

//   addEmployee(employee: Employee): void {
//     this.employees.push(employee);
//   }

//   updateEmployee(id: number, employee: Employee): void {
//     const index = this.employees.findIndex((employee) => employee.id === id);
//     if (index !== -1) {
//       this.employees[index] = employee;
//     }
//   }

//   deleteEmployee(id: number): void {
//     const index = this.employees.findIndex((employee) => employee.id === id);
//     if (index !== -1) {
//       this.employees.splice(index, 1);
//     }
//   }

//   // CRUD operations for performance reviews
//   getPerformanceReviews(): PerformanceReview[] {
//     return this.performanceReviews;
//   }

//   getPerformanceReview(id: number): PerformanceReview | undefined {
//     return this.performanceReviews.find((review) => review.id === id);
//   }

//   addPerformanceReview(review: PerformanceReview): void {
//     this.performanceReviews.push(review);
//   }

//   updatePerformanceReview(id: number, review: PerformanceReview): void {
//     const index = this.performanceReviews.findIndex(
//       (review) => review.id === id
//     );
//     if (index !== -1) {
//       this.performanceReviews[index] = review;
//     }
//   }

//   deletePerformanceReview(id: number): void {
//     const index = this.performanceReviews.findIndex(
//       (review) => review.id === id
//     );
//     if (index !== -1) {
//       this.performanceReviews.splice(index, 1);
//     }
//   }

//   // CRUD operations for goals
//   getGoals(): Goal[] {
//     return this.goals;
//   }

//   getGoal(id: number): Goal | undefined {
//     return this.goals.find((goal) => goal.id === id);
//   }

//   addGoal(goal: Goal): void {
//     this.goals.push(goal);
//   }

//   updateGoal(id: number, goal: Goal): void {
//     const index = this.goals.findIndex((goal) => goal.id === id);
//     if (index !== -1) {
//       this.goals[index] = goal;
//     }
//   }

//   deleteGoal(id: number): void {
//     const index = this.goals.findIndex((goal) => goal.id === id);
//     if (index !== -1) {
//       this.goals.splice(index, 1);
//     }
//   }
// }

// Performance Model for Angular HR Payroll Management System
// ===========================================================

// ### Overview

// The Performance Model is a crucial component of the Angular HR Payroll Management System, responsible for managing employee performance data. This model will define the structure and relationships between different performance-related entities.

// ### Entities

// #### 1. Employee

// *   `id` (unique identifier)
// *   `name`
// *   `email`
// *   `department`
// *   `designation`
// *   `performanceReviews` (array of PerformanceReview objects)

// #### 2. PerformanceReview

// *   `id` (unique identifier)
// *   `employeeId` (foreign key referencing the Employee entity)
// *   `reviewDate`
// *   `rating` (numeric value representing the employee's performance)
// *   `comments` (text describing the employee's performance)
// *   `goals` (array of Goal objects)

// #### 3. Goal

// *   `id` (unique identifier)
// *   `performanceReviewId` (foreign key referencing the PerformanceReview entity)
// *   `description`
// *   `targetDate`
// *   `status` (enum: 'in_progress', 'completed', 'overdue')

// ### Relationships

// *   An employee can have multiple performance reviews (one-to-many).
// *   A performance review is associated with one employee (many-to-one).
// *   A performance review can have multiple goals (one-to-many).
// *   A goal is associated with one performance review (many-to-one).

// ### Interfaces

// ```typescript
// // employee.interface.ts
// export interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   designation: string;
//   performanceReviews: PerformanceReview[];
// }

// // performance-review.interface.ts
// export interface PerformanceReview {
//   id: number;
//   employeeId: number;
//   reviewDate: Date;
//   rating: number;
//   comments: string;
//   goals: Goal[];
// }

// // goal.interface.ts
// export interface Goal {
//   id: number;
//   performanceReviewId: number;
//   description: string;
//   targetDate: Date;
//   status: 'in_progress' | 'completed' | 'overdue';
// }
// ```

// ### Model Class

// ```typescript
// // performance.model.ts
// import { Injectable } from '@angular/core';
// import { Employee } from './employee.interface';
// import { PerformanceReview } from './performance-review.interface';
// import { Goal } from './goal.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class PerformanceModel {

//   private employees: Employee[] = [];
//   private performanceReviews: PerformanceReview[] = [];
//   private goals: Goal[] = [];

//   constructor() { }

//   // CRUD operations for employees
//   getEmployees(): Employee[] {
//     return this.employees;
//   }

//   getEmployee(id: number): Employee | undefined {
//     return this.employees.find(employee => employee.id === id);
//   }

//   addEmployee(employee: Employee): void {
//     this.employees.push(employee);
//   }

//   updateEmployee(id: number, employee: Employee): void {
//     const index = this.employees.findIndex(employee => employee.id === id);
//     if (index !== -1) {
//       this.employees[index] = employee;
//     }
//   }

//   deleteEmployee(id: number): void {
//     const index = this.employees.findIndex(employee => employee.id === id);
//     if (index !== -1) {
//       this.employees.splice(index, 1);
//     }
//   }

//   // CRUD operations for performance reviews
//   getPerformanceReviews(): PerformanceReview[] {
//     return this.performanceReviews;
//   }

//   getPerformanceReview(id: number): PerformanceReview | undefined {
//     return this.performanceReviews.find(review => review.id === id);
//   }

//   addPerformanceReview(review: PerformanceReview): void {
//     this.performanceReviews.push(review);
//   }

//   updatePerformanceReview(id: number, review: PerformanceReview): void {
//     const index = this.performanceReviews.findIndex(review => review.id === id);
//     if (index !== -1) {
//       this.performanceReviews[index] = review;
//     }
//   }

//   deletePerformanceReview(id: number): void {
//     const index = this.performanceReviews.findIndex(review => review.id === id);
//     if (index !== -1) {
//       this.performanceReviews.splice(index, 1);
//     }
//   }

//   // CRUD operations for goals
//   getGoals(): Goal[] {
//     return this.goals;
//   }

//   getGoal(id: number): Goal | undefined {
//     return this.goals.find(goal => goal.id === id);
//   }

//   addGoal(goal: Goal): void {
//     this.goals.push(goal);
//   }

//   updateGoal(id: number, goal: Goal): void {
//     const index = this.goals.findIndex(goal => goal.id === id);
//     if (index !== -1) {
//       this.goals[index] = goal;
//     }
//   }

//   deleteGoal(id: number): void {
//     const index = this.goals.findIndex(goal => goal.id === id);
//     if (index !== -1) {
//       this.goals.splice(index, 1);
//     }
//   }
// }
// ```

// ### Usage

// ```typescript
// // example.component.ts
// import { Component, OnInit } from '@angular/core';
// import { PerformanceModel } from './performance.model';

// @Component({
//   selector: 'app-example',
//   template: '<p>Example Component</p>'
// })
// export class ExampleComponent implements OnInit {

//   constructor(private performanceModel: PerformanceModel) { }

//   ngOnInit(): void {
//     // Create a new employee
//     const employee: Employee = {
//       id: 1,
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       department: 'HR',
//       designation: 'Manager',
//       performanceReviews: []
//     };

//     // Add the employee to the performance model
//     this.performanceModel.addEmployee(employee);

//     // Create a new performance review
//     const review: PerformanceReview = {
//       id: 1,
//       employeeId: 1,
//       reviewDate: new Date(),
//       rating: 5,
//       comments: 'Excellent performance',
//       goals: []
//     };

//     // Add the performance review to the performance model
//     this.performanceModel.addPerformanceReview(review);

//     // Create a new goal
//     const goal: Goal = {
//       id: 1,
//       performanceReviewId: 1,
//       description: 'Improve sales',
//       targetDate: new Date(),
//       status: 'in_progress'
//     };

//     // Add the goal to the performance model
//     this.performanceModel.addGoal(goal);
//   }
// }
// ```
