import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {GroupModel} from '../../../model/group.model';
import {RestService} from '../../../service/rest-service';

import {MatCheckbox} from '@angular/material/checkbox';
import {MatCard} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatButton} from '@angular/material/button';
import {MatHint, MatOption, MatSelect} from '@angular/material/select';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {StudentAssignmentModel} from '../../../model/studentAssignmentModel';
import {AssignmentStatus} from '../../../model/assignment-status';
import {NgForOf, NgIf} from '@angular/common';
import {StudentModel} from '../../../model/studentModel';

@Component({
  selector: 'app-grade-student-dialog',
  imports: [
    MatDialogContent,
    FormsModule,
    MatFormField,
    MatDialogActions,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatCard,
    MatChipSet,
    MatChip,
    MatButton,
    MatLabel,
    MatHint,
    MatError,
    ReactiveFormsModule,
    MatInput,
    MatDialogTitle,
    NgForOf,
    NgIf,
    MatDialogClose
  ],
  templateUrl: './grade-student-dialog.html',
  styleUrl: './grade-student-dialog.css'
})
export class GradeStudentDialog {

  form!: FormGroup;
  assignmentStatuses: string[] = Object.values(AssignmentStatus);

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: StudentAssignmentModel,
              private dialogRef: MatDialogRef<GradeStudentDialog>, private restService: RestService) {

    this.form = this.fb.group({
      studentGrade: [data.grade, [Validators.required, Validators.min(0), Validators.max(10)]],
      assignmentStatus: [data.assignmentStatus, Validators.required],
      copied: [data.passed],
      remarks: [data.remarks],
    });
  }

  gradeStudent() {
    const gradeModel: StudentAssignmentModel = {
      ...this.data,
      grade: this.form.get('studentGrade')?.value,
      assignmentStatus: this.form.get('assignmentStatus')?.value,
    };
    this.restService.gradeStudent(gradeModel).subscribe(() => {
      this.dialogRef.close();
    })
  }
}
