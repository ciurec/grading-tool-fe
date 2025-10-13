import {Component, inject, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Student} from '../../model/student';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreateStudentDialog} from '../create-student-component/create-student-dialog';
import {RestService} from '../../service/rest-service';
import {HttpClient} from '@angular/common/http';
import {StudentLeftFilter} from '../student-left-filter/student-left-filter';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-student-component',
  imports: [MatTableModule, MatButton, StudentLeftFilter, MatIcon, MatIconButton],
  templateUrl: './student-table-component.html',
  standalone: true,
  styleUrl: './student-table-component.css'
})
export class StudentTableComponent implements OnInit {

  displayedColumns: string[] = ['index', 'firstName', 'lastName','studyGroup','averageScore', 'githubRepository', 'actions'];
  dataSource: Student[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private restService: RestService) {
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

  viewStudentDetails(element: Student) {

  }

  onGroupsChanged(selectedGroups: string[]) {

  }
}
