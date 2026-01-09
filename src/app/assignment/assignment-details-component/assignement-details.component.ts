import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';
import {StudentModel} from '../../model/studentModel';
import {of} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {AssignmentModel} from '../../model/assignmentModel';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {MatCheckbox} from '@angular/material/checkbox';
import {SelectionModel} from "@angular/cdk/collections";
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PlagiarismResultDialog} from '../dialogs/plagiarism-result-dialog/plagiarism-result-dialog';
import {EditAssignementDialog} from '../dialogs/edit-assignement-dialog/edit-assignement-dialog';
import {RestService} from '../../service/rest-service';

@Component({
  selector: 'app-assignement-details-component',
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatCheckbox,
    NgIf
  ],
  templateUrl: './assignement-details.component.html',
  styleUrl: './assignement-details.component.css'
})
export class AssignementDetailsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'index', 'firstName', 'lastName', 'averageScore', 'passed', 'githubRepository'];
  selection = new SelectionModel<any>(true, []); // true = multi-select
  readonly dialog = inject(MatDialog);

  assignment?: AssignmentModel;

  protected readonly of = of;

  constructor(private router: Router, private route: ActivatedRoute, private service: RestService,) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAssignmentById(id).subscribe(assignement => {
      this.assignment = assignement;
    });
  }

  editAssignement() {
    const dialogRef = this.dialog.open(EditAssignementDialog, {
      width: '80%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });

  }

  checkPlagiarismForAssignment() {
    const dialogRef = this.dialog.open(PlagiarismResultDialog, {
      width: '80%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  toggleRow(row: any) {
    this.selection.toggle(row);
  }

  toggleAllRows() {
    if (this.assignment) {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
      this.selection.select(...this.assignment.students);
    }
  }

  isAllSelected() {
    return this.selection.selected.length === this.assignment?.students.length;
  }

  isIndeterminate() {
    return this.selection.selected.length > 0 &&
      !this.isAllSelected();
  }

  goBack() {
    this.router.navigate(['/assignments']);
  }
}

