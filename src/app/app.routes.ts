import { Routes } from '@angular/router';
import {StudentTableComponent} from './student/student-table-component/student-table-component';
import {AssignmentTableComponent} from './assignment/assignment-table-component/assignment-table-component';

export const routes: Routes = [
  { path: 'students', component: StudentTableComponent },
  { path: 'assignments', component: AssignmentTableComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
