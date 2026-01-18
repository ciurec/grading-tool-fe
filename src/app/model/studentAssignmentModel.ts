import {AssignmentStatus} from './assignment-status';

export interface StudentAssignmentModel {
  assignmentNumber: number;
  studentNumber: number;
  title: string;
  deadline: string;

  githubRepo: string;
  studentFirstName: string;
  studentLastName: string;
  passed: boolean;
  grade: number;
  assignmentStatus: AssignmentStatus;
}
