import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RestService} from '../../service/rest-service';
import {Student} from '../../model/student';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-create-assignment-component',
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatFormField,
  ],
  templateUrl: './create-assignment-component.html',
  styleUrl: './create-assignment-component.css'
})
export class CreateAssignmentComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<CreateAssignmentComponent>, private restService: RestService) {

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
    const assignment: Student = this.form.value as Student;

    this.restService.createAssignement(assignment).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: (err) => {
        console.error('Error saving student:', err);
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
