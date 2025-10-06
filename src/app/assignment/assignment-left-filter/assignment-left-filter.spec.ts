import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentLeftFilter } from './assignment-left-filter';

describe('StudentLeftFilter', () => {
  let component: AssignmentLeftFilter;
  let fixture: ComponentFixture<AssignmentLeftFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentLeftFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentLeftFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
