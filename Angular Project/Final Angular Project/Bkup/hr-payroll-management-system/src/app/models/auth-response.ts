export class AuthResponseModel {
  token: string;
  expiresIn: number; // Token expiry time in seconds
  issuedAt: Date; // Date when the token was issued
  role: 'Admin' | 'Manager' | 'Employee'; // Role of the authenticated user

  constructor(
    token: string,
    expiresIn: number,
    issuedAt: Date | string,
    role: 'Admin' | 'Manager' | 'Employee'
  ) {
    this.token = token;
    this.expiresIn = expiresIn;
    // Convert issuedAt to Date if it's a string
    this.issuedAt =
      typeof issuedAt === 'string' ? new Date(issuedAt) : issuedAt;
    this.role = role;
  }

  // Method to check if the token has expired
  isTokenExpired(): boolean {
    const now = new Date();
    const expiryDate = new Date(
      this.issuedAt.getTime() + this.expiresIn * 1000
    );
    return now > expiryDate;
  }

  // Method to get the token's remaining validity time in seconds
  getRemainingValidity(): number {
    if (this.isTokenExpired()) return 0;
    const now = new Date();
    const expiryDate = new Date(
      this.issuedAt.getTime() + this.expiresIn * 1000
    );
    return Math.floor((expiryDate.getTime() - now.getTime()) / 1000);
  }
}
