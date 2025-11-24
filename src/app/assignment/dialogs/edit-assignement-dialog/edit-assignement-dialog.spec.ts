import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssignementDialog } from './edit-assignement-dialog';

describe('EditAssignementDialog', () => {
  let component: EditAssignementDialog;
  let fixture: ComponentFixture<EditAssignementDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAssignementDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAssignementDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
