import { Component } from '@angular/core';
import {MatFormField, MatHint, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-student-component',
  imports: [
    MatFormField,
    MatLabel,
    MatIcon,
    MatHint,
    MatFormField,
    MatLabel,
    MatIcon,
    MatHint,
    MatInput,
    MatDialogModule,
    MatButtonModule,
],
  templateUrl: './create-student-dialog.html',
  standalone: true,
  styleUrl: './create-student-dialog.css'
})
export class CreateStudentDialog {

  studentName: string = '';

  constructor(private dialogRef: MatDialogRef<CreateStudentDialog>) {}

  onSave() {
    console.log('Save button clicked, student:', this.studentName);
    this.dialogRef.close(this.studentName); // trimite datele înapoi
  }

  onClose() {
    this.dialogRef.close(); // închide dialogul fără date
  }
}
