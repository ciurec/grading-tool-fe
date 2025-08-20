import { Component } from '@angular/core';
import {MatFormField, MatHint, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

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


  protected onSave() {
    console.log('Save button clicked');
  }

  protected onClose() {
    console.log('Save button clicked');
  }
}
