import {Assignment} from './assignment';
import {GroupModel} from './group.model';

export interface Student {
  id: number;
  index: number;
  firstName: string;
  lastName: string;
  averageScore?: number;
  passed?:boolean;
  githubgRepository?: string;
  studyGroup?: GroupModel;
  email?: string;
  assignments: Assignment[];
}
