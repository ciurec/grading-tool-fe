import {Assignment} from './assignment';

export interface Student {
  index: number;
  firstName: string;
  lastName: string;
  average?: number;
  repo?: string;
  group?: string;
  email?: string;
  assignments: Assignment[];
}
