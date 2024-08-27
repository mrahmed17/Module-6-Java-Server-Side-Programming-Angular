export class LocationModel {
  id!: string; //primary key
  locationName!: string;

  addressLine!: string;
  city!: string;

  state!: string;
  postalCode!: string;
  countryName!: string;

  isActive!: boolean; // A boolean flag indicating whether the location is currently active or inactive.
  createdAt!: Date; //The timestamp when the location was created.

  lastUpdatedAt!: Date; // The timestamp when the location was last updated.

  photo?: string; // Optional field for the location's photo
}
