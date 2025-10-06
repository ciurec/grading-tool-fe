import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLeftFilter } from './student-left-filter';

describe('StudentLeftFilter', () => {
  let component: StudentLeftFilter;
  let fixture: ComponentFixture<StudentLeftFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLeftFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLeftFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
