import {Assignment} from './assignment';
import {GroupModel} from './group.model';

export interface Student {
  index: number;
  firstName: string;
  lastName: string;
  averageScore?: number;
  githubgRepository?: string;
  studyGroup?: GroupModel;
  email?: string;
  assignments: Assignment[];
}
