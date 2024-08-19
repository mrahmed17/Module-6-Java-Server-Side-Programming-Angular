export class LocationModel {
    id?: string; // Optional, primary key
    name!: string;
    city!: string;
    state!: string;
    photo?: string;
    availableUnits!: number;
    wifi!: boolean;
    laundry!: boolean;
}