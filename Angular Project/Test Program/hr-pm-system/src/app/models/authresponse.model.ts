import { UserModel } from './user.model';

export class AuthResponse {
  token!: string; // JWT or any other authentication token

  UserModel!: {
    role: 'Admin' | 'HR' | 'Employee';
  }; // Reference to the authenticated UserModel

  expiresIn!: number; // Expiration time for the token, in seconds

  issuedAt!: Date; // The date and time when the token was issued
}
