import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('disertatie-fe-v2');
}
