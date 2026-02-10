import {StudentSubmission} from './student-submission';

export interface PlagiarismCheckInput {
  assignmentId: string;
  submissions: StudentSubmission[];
}
