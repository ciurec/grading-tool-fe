import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentTableComponent} from './student/student-table-component/student-table-component';
import {AssignmentTableComponent} from './assignment/assignment-table-component/assignment-table-component';
import {AppShell} from './app-shell/app-shell';

const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      { path: 'students', component: StudentTableComponent },
      { path: 'assignments', component: AssignmentTableComponent },
      { path: '', redirectTo: 'students', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
