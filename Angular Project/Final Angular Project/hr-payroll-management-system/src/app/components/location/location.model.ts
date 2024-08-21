import { DepartmentModel } from '../department/department.model';

export class LocationModel {
  id?: string; // Optional, primary key
  name!: string;
  city!: string;
  state!: string;
  photo?: string;
}
