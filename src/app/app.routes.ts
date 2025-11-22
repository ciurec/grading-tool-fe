import {Routes} from '@angular/router';
import {StudentTableComponent} from './student/student-table-component/student-table-component';
import {AssignmentTableComponent} from './assignment/assignment-table-component/assignment-table-component';
import {AssignementDetailsComponent} from './assignment/assignment-details-component/assignement-details.component';
import {MainComponentShell} from './app-shell/main-component/main-component-shell';
import {StudentDetailsComponent} from './student/student-details-component/student-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponentShell,
    children: [
      { path: 'students', component: StudentTableComponent },
      { path: 'assignments', component: AssignmentTableComponent },
      { path: '', redirectTo: 'students', pathMatch: 'full' }
    ]
  },

  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'assignments/:id', component: AssignementDetailsComponent },

  { path: '**', redirectTo: 'students' }
];
