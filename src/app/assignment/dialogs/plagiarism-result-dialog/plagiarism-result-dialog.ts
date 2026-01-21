import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatCell, MatColumnDef, MatHeaderCell, MatTable} from '@angular/material/table';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-plagiarism-result-dialog',
  imports: [
    MatDialogContent,
    MatButton,
    MatProgressSpinner,
    MatDivider,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatPaginator,
    MatDialogActions
  ],
  templateUrl: './plagiarism-result-dialog.html',
  styleUrl: './plagiarism-result-dialog.css'
})
export class PlagiarismResultDialog {
  isRunning: boolean = false;
  studentsCount = 3;
  results: [] = [];

  onClose() {

  }

  onCheckPlagiarism() {
  }
}
