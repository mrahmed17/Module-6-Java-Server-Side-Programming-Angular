import { UserModel } from '../models/user.model';

export interface AuthResponse {
  token: string; //Generate and sotre token
  user: UserModel; //User base token generate
  expiresIn?: number; // Token expiration time in seconds
  issuedAt?: Date; // When the token was issued
}
