import { Routes } from '@angular/router';
import {StudentComponent} from './student-table-component/student-component';
import {AssignmentComponent} from './assignment-table-component/assignment-component';

export const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'assignments', component: AssignmentComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
