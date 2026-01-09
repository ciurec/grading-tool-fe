import {AssignmentModel} from './assignmentModel';
import {GroupModel} from './group.model';

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
  assignments: AssignmentModel[];
}
