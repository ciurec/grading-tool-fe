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
import {MatError, MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {MatChip, MatChipRemove, MatChipSet} from '@angular/material/chips';
import {NgForOf} from '@angular/common';
import {StudentModel} from '../../../model/studentModel';
import {RestService} from '../../../service/rest-service';
import {MatOption, MatSelect} from '@angular/material/select';
import {StudentAssignmentModel} from '../../../model/studentAssignmentModel';
import {AssignmentModel} from '../../../model/assignmentModel';
import {EditAssignmentModel} from '../../../model/edit-assignment-model';

@Component({
  selector: 'app-edit-assignement-dialog',
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatChip,
    MatChipRemove,
    MatChipSet,
    NgForOf,
    MatDialogClose
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

    this.form = this.fb.group({
      assignementTitle: [data.title],
      deadline: [''],
      repository: [''],
      search: [''],
      studentIds: [data.students.map(x=>x.studentId)]
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
      assignementTitle: 'test',
      deadline: 'test',
      repository: 'test',
      studentIds: this.selectedStudents.map((x) => x.id),
    }
    // this.restService.addAssignementToStudent(asssignement).subscribe(() =>
    //   this.dialogRef.close()
    // );

  }
}
