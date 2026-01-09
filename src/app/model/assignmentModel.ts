import {StudentAssignmentModel} from './studentAssignmentModel';

export interface AssignmentModel {
  id: number;
  assignmentNumber: number;
  title: string;
  githubRepo: string;
  status: 'Predat' | 'Nepredat';
  grade?: number;
  copied?: boolean;
  repo?: string;
  deadline: string;
  students: StudentAssignmentModel[];
}
