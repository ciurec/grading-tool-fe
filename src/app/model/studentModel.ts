import {AssignmentModel} from './assignmentModel';
import {GroupModel} from './group.model';
import {StudentAssignmentModel} from './studentAssignmentModel';

export interface StudentModel {
  id: number;
  studentNumber: number;
  firstName: string;
  lastName: string;
  averageScore?: number;
  passed?:boolean;
  githubgRepository?: string;
  studyGroup?: GroupModel;
  email?: string;
  assignments: StudentAssignmentModel[];
}
