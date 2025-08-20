import {Component, inject} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Student} from './model/student';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreateStudentDialog} from '../create-student-component/create-student-dialog';


const ELEMENT_DATA: Student[] = [
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
  {index: 1, name: 'Test', group: 2, average: 10, repo: 'Repo X', action: 'test'},
]

@Component({
  selector: 'app-student-component',
  imports: [MatTableModule, MatButton],
  templateUrl: './student-component.html',
  standalone: true,
  styleUrl: './student-component.css'
})
export class StudentComponent {

  displayedColumns: string[] = ['index', 'name', 'group', 'average'];
  dataSource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);

  constructor(
  ) {
  }

  openAddStundentDialog() {
    const dialogRef = this.dialog.open(CreateStudentDialog);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
