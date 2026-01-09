import {Component, inject, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {StudentModel} from '../../model/studentModel';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreateStudentDialog} from '../dialogs/create-student-dialog/create-student-dialog';
import {RestService} from '../../service/rest-service';
import {StudentLeftFilter} from '../student-left-filter/student-left-filter';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-component',
  imports: [MatTableModule, MatButton, StudentLeftFilter],
  templateUrl: './student-table-component.html',
  standalone: true,
  styleUrl: './student-table-component.css'
})
export class StudentTableComponent implements OnInit {

  displayedColumns: string[] = ['studentNumber', 'firstName', 'lastName','studyGroup','averageScore', 'githubRepository', 'actions'];
  dataSource: StudentModel[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private restService: RestService,private router:Router) {
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  private loadStudents() {
    this.restService.getStudents().subscribe(students => {
      this.dataSource = students;
    })
  }

  openAddStundentDialog() {
    const dialogRef = this.dialog.open(CreateStudentDialog, {
      width: '400px',
      panelClass: 'my-custom-dialog'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadStudents();
    });
  }

  viewStudentDetails(element: StudentModel) {
    this.router.navigate(['/students', element.id]);

  }

  onGroupsChanged(selectedGroups: string[]) {

  }
}
