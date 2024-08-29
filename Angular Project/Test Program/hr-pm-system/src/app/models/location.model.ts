export class LocationModel {
  id: string;
  name: string; // Name of the location
  address: string; // Address of the location
  city: string; // City where the location is situated
  state: string; // State where the location is situated
  zipCode: string; // ZIP or postal code of the location
  country: string; // Country where the location is situated
  createdAt: Date; // The timestamp when the location was created.
  lastUpdatedAt: Date; // The timestamp when the location was last updated.
  photo?: string; // Optional field for the location's photo

  constructor(
    locationId: string,
    name: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    country: string,
    createdAt: Date,
    lastUpdatedAt: Date,
    photo?: string // Made photo optional in the constructor
  ) {
    this.id = locationId;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.country = country;
    this.createdAt = createdAt;
    this.lastUpdatedAt = lastUpdatedAt;
    this.photo = photo;
  }

  // Method to update location details
  updateDetails(
    name: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    country: string,
    createdAt: Date,
    lastUpdatedAt: Date,
    photo?: string // Made photo optional in the updateDetails method
  ) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.country = country;
    this.createdAt = createdAt;
    this.lastUpdatedAt = lastUpdatedAt;
    this.photo = photo;
  }

  // Method to get location details as a string
  getLocationDetails(): string {
    return `Location ID: ${this.id}\nName: ${this.name}\nAddress: ${
      this.address
    }\nCity: ${this.city}\nState: ${this.state}\nZIP Code: ${
      this.zipCode
    }\nCountry: ${this.country}\nCreated At: ${
      this.createdAt
    }\nLast Updated At: ${this.lastUpdatedAt}\nPhoto: ${
      this.photo ?? 'No photo available'
    }`;
  }
}
