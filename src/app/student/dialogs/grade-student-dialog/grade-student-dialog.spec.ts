import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeStudentDialog } from './grade-student-dialog';

describe('GradeStudentDialog', () => {
  let component: GradeStudentDialog;
  let fixture: ComponentFixture<GradeStudentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeStudentDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeStudentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
