import {Component, OnInit} from '@angular/core';
import {MatFormField, MatHint, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RestService} from '../../service/rest-service';
import {Student} from '../../model/student';

@Component({
  selector: 'app-create-student-component',
  imports: [
    MatFormField,
    MatLabel,
    MatIcon,
    MatHint,
    MatLabel,
    MatIcon,
    MatHint,
    MatInput,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-student-dialog.html',
  standalone: true,
  styleUrl: './create-student-dialog.css'
})
export class CreateStudentDialog implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<CreateStudentDialog>, private restService: RestService) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  onSave() {
    const student: Student = this.form.value as Student;

    console.log(student)
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
    this.dialogRef.close(); // închide dialogul fără date
  }
}
