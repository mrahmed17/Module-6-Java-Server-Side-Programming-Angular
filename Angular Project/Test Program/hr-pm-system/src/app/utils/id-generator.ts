export class IdGenerator {
  static generateUniqueId(username: string): string {
    const randomNumber = this.generateRandomNumber();
    return `${username}-${randomNumber}`;
  }

  private static generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
  }
}
