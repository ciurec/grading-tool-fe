import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
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
    MatDialogTitle
  ],
  templateUrl: './grade-student-dialog.html',
  styleUrl: './grade-student-dialog.css'
})
export class GradeStudentDialog {

  form!: FormGroup;

  studyGroups: GroupModel [] = [];
  data?: StudentAssignmentModel;
  status:string[] =['status_','status_2'];

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GradeStudentDialog>, private restService: RestService) {

    this.form = this.fb.group({
      grade: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
      status: [null, Validators.required],
      copied: [false],
      note: [''],
    });

  }
}
