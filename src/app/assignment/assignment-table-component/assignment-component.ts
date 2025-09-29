import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {Student} from '../../model/student';
import {MatDialog} from '@angular/material/dialog';
import {RestService} from '../../service/rest-service';
import {CreateStudentDialog} from '../../student/create-student-component/create-student-dialog';
import {CreateAssignmentComponent} from '../create-assignment-component/create-assignment-component';

@Component({
  selector: 'app-assignment-component',
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './assignment-component.html',
  styleUrl: './assignment-component.css'
})
export class AssignmentComponent implements OnInit{

  displayedColumns: string[] = ['index', 'assignmentName', 'deadline'];
  dataSource:Student[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.restService.getStudents().subscribe(students => {
      this.dataSource = students;
    })
  }


  openAddAssignmentDialog() {
    const dialogRef = this.dialog.open(CreateAssignmentComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
