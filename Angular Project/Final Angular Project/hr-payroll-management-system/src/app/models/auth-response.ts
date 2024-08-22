import { UserModel } from '../models/user.model';

export interface AuthResponse {
  token: string;
  user: UserModel;
  expiresIn?: number; // Token expiration time in seconds
  issuedAt?: Date; // When the token was issued
}

// import { UserModel } from "./user.model";

// export interface AuthResponse {
//     token: string;
//     user: UserModel;

// }
