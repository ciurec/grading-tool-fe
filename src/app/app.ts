import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTable} from '@angular/material/table';
import {StudentComponent} from './student-component/student-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTable, StudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('disertatie-fe-v2');
}
