import {StudentModel} from './studentModel';

export interface AssignmentModel {
  id: number;
  assignmentNumber: number;
  title: string;
  githubRepo: string;
  status: 'Predat' | 'Nepredat';
  grade?: number;
  score?: number;
  copied?: boolean;
  repo?: string;
  deadline: string;
  students: StudentModel[];
}
