import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {Student} from '../../model/student';
import {of} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {Assignment} from '../../model/assignment';
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
import {Router} from '@angular/router';

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
    MatCheckbox
  ],
  templateUrl: './assignement-details.component.html',
  styleUrl: './assignement-details.component.css'
})
export class AssignementDetailsComponent {
  displayedColumns: string[] = ['select', 'index', 'firstName', 'lastName', 'averageScore', 'passed', 'githubRepository'];
  selection = new SelectionModel<any>(true, []); // true = multi-select

  ASSIGNMENT: Assignment =
    {
      id: 0,
      title: 'Popescu Ion',
      status: 'Predat',
      deadline: 'test',
      students: [
        {
          id: 0,
          index: 1,
          firstName: 'Popescu Ion',
          lastName: 'Popescu Ion',
          studyGroup: {
            id: 1,
            name: 'Grupa 1',
          },
          email: 'ion.popescu@email.com',
          assignments: [],
        },
        {
          id: 0,
          index: 1,
          firstName: 'Popescu Ion',
          lastName: 'Popescu Ion',
          studyGroup: {
            id: 1,
            name: 'Grupa 1',
          },
          email: 'ion.popescu@email.com',
          assignments: [],
        },
        {
          id: 0,
          index: 1,
          firstName: 'Popescu Ion',
          lastName: 'Popescu Ion',
          studyGroup: {
            id: 1,
            name: 'Grupa 1',
          },
          email: 'ion.popescu@email.com',
          assignments: [],
        }
      ]
    }
  ;
  protected readonly of = of;


  constructor(private router: Router) {
  }

  viewStudentDetails(element: Student) {

  }

  checkPlagiarismForAssignment() {

  }


  toggleRow(row: any) {
    this.selection.toggle(row);
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.ASSIGNMENT.students);
  }

  isAllSelected() {
    return this.selection.selected.length === this.ASSIGNMENT.students.length;
  }

  isIndeterminate() {
    return this.selection.selected.length > 0 &&
      !this.isAllSelected();
  }

  goBack() {
    this.router.navigate(['/assignments']);
  }
}

