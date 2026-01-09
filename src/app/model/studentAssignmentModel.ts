import {StudentModel} from './studentModel';

export interface StudentAssignmentModel {
  assignmentNumber: number;
  studentNumber: number;
  title: string;
  deadline: string;

  githubRepo: string;
  status: 'Predat' | 'Nepredat';
  studentFirstName: string;
  studentLastName: string;
  passed: boolean;
  score: number;

}
