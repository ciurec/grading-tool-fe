import {StudentAssignmentModel} from './studentAssignmentModel';

export interface AssignmentModel {
  id: number;
  assignmentNumber: number;
  title: string;
  githubRepo: string;
  grade?: number;
  copied?: boolean;
  repo?: string;
  deadline: string;
  students: StudentAssignmentModel[];
}
