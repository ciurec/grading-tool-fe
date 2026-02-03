import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from "@angular/material/dialog";
import {MatError, MatFormField, MatInput, MatInputModule, MatLabel, MatSuffix} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {MatChip, MatChipRemove, MatChipSet} from '@angular/material/chips';
import {CommonModule, NgForOf} from '@angular/common';
import {StudentModel} from '../../../model/studentModel';
import {RestService} from '../../../service/rest-service';
import {MatOption, MatSelect} from '@angular/material/select';
import {AssignmentModel} from '../../../model/assignmentModel';
import {EditAssignmentModel} from '../../../model/saving/edit-assignment-model';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-assignement-dialog',

  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material - standalone components (NU module)
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,

    MatOption,

    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,

    MatAutocomplete,
    MatAutocompleteTrigger,

    MatChipSet,
    MatChip,
    MatChipRemove,

    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSuffix,
  ],

  templateUrl: './edit-assignement-dialog.html',
  styleUrl: './edit-assignement-dialog.css'
})
export class EditAssignementDialog implements OnInit {

  students: StudentModel[] = [];
  form!: FormGroup;


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
              public data: AssignmentModel,
              private restService: RestService, private dialogRef: MatDialogRef<EditAssignementDialog>) {
    const toDateOrNull = (v: any): Date | null => (v ? new Date(v) : null);

    this.form = this.fb.group({
      assignementTitle: [data.title],
      deadline: [toDateOrNull(data.deadline)],
      repository: [data.repo],
      search: [''],
      studentIds: [data.students.map(x => x.studentId)]
    });
  }

  ngOnInit() {
    this.restService.getStudents().subscribe((students) => {
      this.students = students;
    })
  }

  get selectedStudents() {
    const ids = this.form.value.studentIds ?? [];
    return this.students.filter(s => ids.includes(s.id));
  }

  displayStudents(student: StudentModel):
    string {
    return student ? student.firstName + ' ' + student.lastName : '';
  }

  add(a: any) {
    const ids = this.form.value.studentIds!;
    if (!ids.includes(a.id)) {
      this.form.patchValue({studentIds: [...ids, a.id], search: ''});
    }
  }

  remove(id: number) {
    this.form.patchValue({
      studentIds: this.form.value.studentIds!.filter((x: number) => x !== id)
    });
  }

  onSave() {

    const asssignement: EditAssignmentModel = {
      assignmentId: this.data.id,
      assignementTitle: this.form.get('assignementTitle')?.value,
      deadline: this.form.get('deadline')?.value,
      repository: this.form.get('repository')?.value,
      studentIds: this.selectedStudents.map((x) => x.id),
    }
    this.restService.editAssignement(asssignement).subscribe(() =>
      this.dialogRef.close()
    );

  }
}
