import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {StudentModel} from '../../model/studentModel';
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
import {AssignmentModel} from '../../model/assignmentModel';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateAssignmentComponent} from '../../assignment/dialogs/create-assignment-dialog/create-assignment-component';
import {MatDialog} from '@angular/material/dialog';
import {GradeStudentDialog} from '../dialogs/grade-student-dialog/grade-student-dialog';
import {EditStudentDialog} from '../dialogs/edit-student-dialog/edit-student-dialog';
import {RestService} from '../../service/rest-service';
import {NgIf} from '@angular/common';
import {AddAssignmentComponent} from '../dialogs/add-assignment-dialog/add-assignment-dialog';

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
    MatHeaderCellDef,
    NgIf
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'githubRepo', 'averageScore', 'passed', 'deadline', 'actions'];
  readonly dialog = inject(MatDialog);

  student?: StudentModel = undefined;

  constructor(private router: Router,
              private service: RestService,
              private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getStudentById(id).subscribe(student => {
      this.student = student;
    });
  }

  gradeStudentForAssignement(element: AssignmentModel) {

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
      data: this.student ,
      width: '80%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addAssignment() {
    const dialogRef = this.dialog.open(AddAssignmentComponent, {
      data: this.student ,
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
