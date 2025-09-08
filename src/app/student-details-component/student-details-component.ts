import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {Student} from '../model/student';
import {of} from 'rxjs';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-student-details-component',
  imports: [
    MatCard,
    MatCardTitle,
    NgForOf,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './student-details-component.html',
  styleUrl: './student-details-component.css'
})
export class StudentDetailsComponent {

    STUDENT: Student =
    {
      index: 1,
      firstName: 'Popescu Ion',
      lastName: 'Popescu Ion',
      group: '30231',
      email: 'ion.popescu@email.com',
      assignments: [
        { title: 'Tema 1', status: 'Predat', grade: 9, copied: false },
        { title: 'Tema 2', status: 'Predat', grade: 7, copied: true },
        { title: 'Tema 3', status: 'Nepredat' },
      ]
    }
  ;
  protected readonly of = of;
}
