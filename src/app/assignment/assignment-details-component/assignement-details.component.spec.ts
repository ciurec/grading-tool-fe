import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignementDetailsComponent } from './assignement-details.component';

describe('StudentDetailsComponent', () => {
  let component: AssignementDetailsComponent;
  let fixture: ComponentFixture<AssignementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignementDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
