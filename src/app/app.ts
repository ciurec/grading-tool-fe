import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTable} from '@angular/material/table';
import {StudentTableComponent} from './student/student-table-component/student-table-component';
import {AssignementDetailsComponent} from './assignment/assignment-details-component/assignement-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTable, StudentTableComponent, AssignementDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('disertatie-fe-v2');
}
