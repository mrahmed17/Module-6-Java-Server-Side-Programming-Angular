import { UserModel } from './user.model';

export class AuthResponse {
  token!: string; // JWT or any other authentication token
  user!: UserModel; // Reference to the authenticated UserModel
  role!: string; // The role of the authenticated user, e.g., 'Admin', 'HR', 'Employee'
  expiresIn!: number; // Expiration time for the token, in seconds
  issuedAt!: Date; // The date and time when the token was issued
}
