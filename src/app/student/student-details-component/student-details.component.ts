import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {Student} from '../../model/student';
import {MatButton} from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {MatCheckbox} from '@angular/material/checkbox';
import {Assignment} from '../../model/assignment';
import {Router} from '@angular/router';
import {CreateAssignmentComponent} from '../../assignment/dialogs/create-assignment-dialog/create-assignment-component';
import {MatDialog} from '@angular/material/dialog';
import {GradeStudentDialog} from '../dialogs/grade-student-dialog/grade-student-dialog';
import {EditStudentDialog} from '../dialogs/edit-student-dialog/edit-student-dialog';

@Component({
  selector: 'app-student-details-component',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCell,
    MatCellDef,
    MatCheckbox,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  displayedColumns: string[] = ['title', 'githubRepo', 'averageScore', 'passed', 'deadline', 'actions'];
  readonly dialog = inject(MatDialog);

  STUDENT: Student =
    {
      id: 0,
      index: 1,
      firstName: 'Popescu Ion',
      lastName: 'Popescu Ion',
      studyGroup: {
        id: 1,
        name: 'Grupa 1',
      },
      email: 'ion.popescu@email.com',
      assignments: [
        {
          id: 1,
          title: 'Tema 1',
          repo: 'test',
          status: 'Predat',
          grade: 9,
          copied: false,
          deadline: 'test',
          students: []
        },
        {
          id: 2,
          title: 'Tema 2',
          repo: 'test',
          status: 'Predat',
          grade: 7,
          copied: true,
          deadline: 'test',
          students: []
        },
        {id: 3, title: 'Tema 3', repo: 'test', status: 'Nepredat', grade: 9, deadline: 'test', students: []},
      ]
    }
  ;


  constructor(private router: Router) {
  }

  gradeStudentForAssignement(element: Assignment) {

    const dialogRef = this.dialog.open(GradeStudentDialog, {
      width: '80%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editStudent() {
    const dialogRef = this.dialog.open(EditStudentDialog, {
      width: '80%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  goBack() {
    this.router.navigate(['/students']);
  }

}
