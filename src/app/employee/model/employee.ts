import { Role } from './role';

export class Employee {
  id!: string;
  fullName!: string;
  email!: string;
  role!: Role;
  isDeleting: boolean = false;
}