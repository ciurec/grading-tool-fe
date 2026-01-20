import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
import {StudentModel} from '../../../model/studentModel';
import {AddAssignmentModel} from '../../../model/add-assignment-model';
import {RestService} from '../../../service/rest-service';
import {AssignmentModel} from '../../../model/assignmentModel';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatAutocomplete,
    MatOption,
    MatChipsModule,
    MatButton,
    MatAutocompleteTrigger,
    NgForOf,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose
  ],
  templateUrl: './add-assignment-dialog.html',
  styleUrl: './add-assignment-dialog.css'

})
export class AddAssignmentComponent implements OnInit {

  assignments: AssignmentModel[] = [];
  form!: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
              public data: StudentModel,
              private restService: RestService, private dialogRef: MatDialogRef<AddAssignmentComponent>,
  ) {
    this
      .form = this.fb.group({
      search: [''],
      assignmentIds: [[] as number[]]
    });
  }

  ngOnInit() {
    this.restService.getAssignments().subscribe((assignemnts) => {
      this.assignments = assignemnts;
    })
    const initialAssignemnts = this.data.assignments.map((assignment) => assignment.assignmentId)
    this.form.patchValue({
      assignmentIds: initialAssignemnts,
    });
  }

  add(a
      :
      any
  ) {
    const ids = this.form.value.assignmentIds!;
    if (!ids.includes(a.id)) {
      this.form.patchValue({assignmentIds: [...ids, a.id], search: ''});
    }
  }

  displayAssignment(a: any):
    string {
    return a ? a.title : '';
  }

  remove(id: number) {
    this.form.patchValue({
      assignmentIds: this.form.value.assignmentIds!.filter((x: number) => x !== id)
    });
  }

  get selectedAssignments() {
    const ids = this.form.value.assignmentIds ?? [];
    return this.assignments.filter(a => ids.includes(a.id));
  }

  onSave() {

    const asssignement: AddAssignmentModel = {
      studentId: this.data.id,
      assignmentIds: this.selectedAssignments.map((x) => x.id),
    }
    this.restService.addAssignementToStudent(asssignement).subscribe(() =>
      this.dialogRef.close()
    );

  }
}
