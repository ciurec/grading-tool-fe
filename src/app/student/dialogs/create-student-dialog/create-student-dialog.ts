import {Component, OnInit} from '@angular/core';
import {MatFormField, MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RestService} from '../../../service/rest-service';
import {StudentModel} from '../../../model/studentModel';
import {MatOption, MatSelect, MatSelectModule} from '@angular/material/select';
import {GroupModel} from '../../../model/group.model';

@Component({
  selector: 'app-create-student-component',
  imports: [
    MatFormField,
    MatLabel,
    MatIcon,
    MatLabel,
    MatIcon,
    MatInput,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './create-student-dialog.html',
  standalone: true,
  styleUrl: './create-student-dialog.css'
})
export class CreateStudentDialog implements OnInit {

  form!: FormGroup;
  studyGroups: GroupModel [] = [];

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<CreateStudentDialog>, private restService: RestService) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      studyGroup: [null, Validators.required],
      phone: ['']
    });
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

    this.restService.createStudent(student).subscribe({
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
