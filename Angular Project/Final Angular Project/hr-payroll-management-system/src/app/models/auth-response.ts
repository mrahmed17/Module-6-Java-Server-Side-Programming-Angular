export interface AuthResponse {
  token: string; //Generate and sotre token

  expiresIn?: number; // Token expiration time in seconds

  issuedAt?: Date; // When the token was issued

  role: 'Admin' | 'HR' | 'Employee';
}
