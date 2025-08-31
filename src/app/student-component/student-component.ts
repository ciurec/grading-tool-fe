import {Component, inject, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Student} from '../model/student';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreateStudentDialog} from '../create-student-component/create-student-dialog';
import {RestService} from '../service/rest-service';


@Component({
  selector: 'app-student-component',
  imports: [MatTableModule, MatButton],
  templateUrl: './student-component.html',
  standalone: true,
  styleUrl: './student-component.css'
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['index', 'firstName', 'lastName', 'average'];
  dataSource:Student[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private restService: RestService,
  ) {
  }

  ngOnInit(): void {
    this.restService.getStudents().subscribe(students => {
      this.dataSource = students;
    })
  }


  openAddStundentDialog() {
    const dialogRef = this.dialog.open(CreateStudentDialog);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
