import {Component, Inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatError, MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {GroupModel} from '../../../model/group.model';
import {RestService} from '../../../service/rest-service';
import {StudentModel} from '../../../model/studentModel';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-edit-student-dialog',
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule
  ],
  templateUrl: './edit-student-dialog.html',
  styleUrl: './edit-student-dialog.css'
})
export class EditStudentDialog implements OnInit {

  form: FormGroup;
  studyGroups: GroupModel [] = [];

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: StudentModel,
              private dialogRef: MatDialogRef<EditStudentDialog>, private restService: RestService) {
    this.form = this.fb.group({
      firstName: [this.data.firstName, Validators.required],
      lastName: [this.data.lastName, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      studyGroup: [this.data.studyGroup?.id, Validators.required],
      phone: ['']
    });
  }

  ngOnInit() {
    this.loadStudyGroups();
  }

  private loadStudyGroups() {
    this.restService.getAllGroups().subscribe({
      next: (groups) => (this.studyGroups = groups),
      error: (err) => console.error('Error loading groups:', err)
    });

  }

  onSave() {
    const student: StudentModel = this.form.value as StudentModel;

    this.restService.updateStudent(student).subscribe({
      next: (savedStudent) => {
        this.dialogRef.close(savedStudent);
      },
      error: (err) => {
        console.error('Error saving student:', err);
      }
    });
  }

  onClose() {
    this.dialogRef.close()
  }
}
