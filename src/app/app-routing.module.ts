import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student-table-component/student-component';
import {AssignmentComponent} from './assignment-table-component/assignment-component';
import {AppShell} from './app-shell/app-shell';

const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      { path: 'students', component: StudentComponent },
      { path: 'assignments', component: AssignmentComponent },
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
