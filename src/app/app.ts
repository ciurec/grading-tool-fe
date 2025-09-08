import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTable} from '@angular/material/table';
import {StudentComponent} from './student-table-component/student-component';
import {StudentDetailsComponent} from './student-details-component/student-details-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTable, StudentComponent, StudentDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('disertatie-fe-v2');
}
