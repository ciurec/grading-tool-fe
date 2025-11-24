import {Component, OnInit} from '@angular/core';
import {MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from '@angular/forms';
import {GroupModel} from '../../../model/group.model';
import {RestService} from '../../../service/rest-service';

@Component({
  selector: 'app-grade-student-dialog',
  imports: [
    MatDialogContent
  ],
  templateUrl: './grade-student-dialog.html',
  styleUrl: './grade-student-dialog.css'
})
export class GradeStudentDialog {

  form!: FormGroup;
  studyGroups: GroupModel [] = [];

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GradeStudentDialog>, private restService: RestService) {
  }
}
