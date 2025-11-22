import {Student} from './student';

export interface Assignment {
  id: number;
  title: string;
  status: 'Predat' | 'Nepredat';
  grade?: number;
  copied?: boolean;
  repo?: string;
  deadline: string;
  students: Student[];
}
