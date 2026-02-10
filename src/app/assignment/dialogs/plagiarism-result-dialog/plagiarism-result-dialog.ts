import {Component, Inject, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {finalize, take} from 'rxjs/operators';
import {PlagiarismResult} from '../../../model/plagiarism-result';
import {RestService} from '../../../service/rest-service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {PlagiarismCheckInput} from '../../../model/plagiarism-check-input';

export const PLAGIARISM_RESULTS_MOCK: PlagiarismResult[] = [
  {
    studentA: 'Alice Ionescu',
    studentB: 'Bob Pop',
    copiedFrom: 'Bob → Alice',
    similarity: 84,
    repoA: 'https://github.com/example/alice',
    repoB: 'https://github.com/example/bob'
  },
  {
    studentA: 'Carmen Mureșan',
    studentB: 'Dan Pavel',
    copiedFrom: null,
    similarity: 9,
    repoA: 'https://github.com/example/carmen',
    repoB: 'https://github.com/example/dan'
  },
  // ...restul la fel
];


export function getStudentsCount(input: PlagiarismCheckInput): number {
  return input?.submissions?.length ?? 0;
}

@Component({
  selector: 'app-plagiarism-check-dialog',
  templateUrl: './plagiarism-result-dialog.html',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    NgClass,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatDialogActions,
    MatButton,
    MatHeaderCellDef,
    NgIf,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatDialogTitle,
    NgForOf
  ],
  styleUrls: ['./plagiarism-result-dialog.css']
})
export class PlagiarismResultDialog implements OnInit, AfterViewInit {

  PLAGIARISM_INPUT_MOCK: PlagiarismCheckInput = {
    assignmentId: 'asg-101',
    submissions: [
      {id: 's-001', name: 'Alice Ionescu', repoUrl: 'https://github.com/example/alice'},
      {id: 's-002', name: 'Bob Pop', repoUrl: 'https://github.com/example/bob'},
      {id: 's-003', name: 'Carmen Mureșan'},
      {id: 's-004', name: 'Dan Pavel'},
      {id: 's-005', name: 'Elena Kerekes'},
      {id: 's-006', name: 'Felix Kovacs'},
      {id: 's-007', name: 'George Varga'},
      {id: 's-008', name: 'Horia Nagy'},
      {id: 's-009', name: 'Irina Matei'},]
  }
  studentsCount = 0;
  isRunning = false;

  results: PlagiarismResult[] = [];
  dataSource = new MatTableDataSource<PlagiarismResult>([]);

  displayedColumns = ['studentA', 'repoA', 'studentB', 'repoB', 'copiedFrom', 'similarity', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialogRef: MatDialogRef<PlagiarismResultDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { studentsCount: number },
    private restService: RestService,
    private cdr: ChangeDetectorRef
  ) {
    this.studentsCount = data?.studentsCount ?? 3;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Leagă paginatorul la datasource
    this.dataSource.paginator = this.paginator;
  }


  onCheckPlagiarism(): void {
    if ((this.studentsCount ?? 0) < 2 || this.isRunning) return;

    this.isRunning = true;

    // Simulare „procesare” — după care folosim mock-ul inițial
    setTimeout(() => {
      this.results = PLAGIARISM_RESULTS_MOCK.slice(); // copiem, să nu modificăm referința
      this.dataSource.data = this.results;

      if (this.paginator) this.paginator.firstPage();
      this.isRunning = false;
    }, 1200);
  }


  onClose():
    void {
    this.dialogRef.close();
  }

  getSimilarityClass(sim: number):
    string {
    if (sim >= 80) return 'sim-high';
    if (sim >= 55) return 'sim-medium';
    return 'sim-low';
  }

  onMarkCopied(row: PlagiarismResult): void {
  }
}
