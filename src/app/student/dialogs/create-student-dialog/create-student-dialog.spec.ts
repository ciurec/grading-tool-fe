import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentDialog } from './create-student-dialog';

describe('CreateStudentComponent', () => {
  let component: CreateStudentDialog;
  let fixture: ComponentFixture<CreateStudentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStudentDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
