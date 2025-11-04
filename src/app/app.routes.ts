import {Routes} from '@angular/router';
import {StudentTableComponent} from './student/student-table-component/student-table-component';
import {AssignmentTableComponent} from './assignment/assignment-table-component/assignment-table-component';
import {StudentDetailsComponent} from './student/student-details-component/student-details-component';
import {MainComponentShell} from './app-shell/main-component/main-component-shell';

export const routes: Routes = [
  {
    path: '',
    component: MainComponentShell,
    children: [
      {path: 'students', component: StudentTableComponent},
      {path: 'assignments', component: AssignmentTableComponent},
    ]
  },
  {
    path: '',
    component: StudentDetailsComponent,
    children: [
      {path: 'studentDetails', component: StudentDetailsComponent},
    ]
  },
  {path: '**', redirectTo: 'students'}
];
