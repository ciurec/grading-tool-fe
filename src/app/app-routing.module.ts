import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentTableComponent} from './student/student-table-component/student-table-component';
import {AssignmentTableComponent} from './assignment/assignment-table-component/assignment-table-component';
import {MainComponentShell} from './app-shell/main-component/main-component-shell';
import {DetailsComponentShell} from './app-shell/details-component/details-component-shell';
import {AssignementDetailsComponent} from './assignment/assignment-details-component/assignement-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponentShell,
    children: [
      { path: 'students', component: StudentTableComponent },
      { path: 'assignments', component: AssignmentTableComponent },
      { path: '', redirectTo: 'students', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' },
  {
    path: '',
    component: DetailsComponentShell,
    children: [
      { path: 'studentDetails', component: AssignementDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
