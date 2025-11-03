import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {Student} from '../../model/student';
import {MatDialog} from '@angular/material/dialog';
import {RestService} from '../../service/rest-service';
import {CreateStudentDialog} from '../../student/create-student-component/create-student-dialog';
import {CreateAssignmentComponent} from '../create-assignment-component/create-assignment-component';
import {Assignment} from '../../model/assignment';
import {StudentLeftFilter} from '../../student/student-left-filter/student-left-filter';
import {AssignmentLeftFilter} from '../assignment-left-filter/assignment-left-filter';

@Component({
  selector: 'app-assignment-component',
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
    StudentLeftFilter,
    AssignmentLeftFilter
  ],
  templateUrl: './assignment-table-component.html',
  standalone: true,
  styleUrl: './assignment-table-component.css'
})
export class AssignmentTableComponent implements OnInit {

  displayedColumns: string[] = ['index', 'title', 'deadline','githubRepository','numberOfStudents', 'actions'];
  dataSource: Assignment[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.restService.getAssignments().subscribe(assignments => {
      this.dataSource = assignments;
    })
  }

  openAddAssignmentDialog() {
    const dialogRef = this.dialog.open(CreateAssignmentComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  viewAssignemntDetails(element: Assignment) {

  }

  onGroupsChanged(selectedGroups: string[]) {

  }
}
