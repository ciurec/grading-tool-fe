import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignmentDialog } from './add-assignment-dialog';

describe('GradeStudentDialog', () => {
  let component: AddAssignmentDialog;
  let fixture: ComponentFixture<AddAssignmentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAssignmentDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssignmentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
