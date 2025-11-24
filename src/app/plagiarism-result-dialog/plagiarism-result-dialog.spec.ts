import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagiarismResultDialog } from './plagiarism-result-dialog';

describe('PlagiarismResultDialog', () => {
  let component: PlagiarismResultDialog;
  let fixture: ComponentFixture<PlagiarismResultDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlagiarismResultDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagiarismResultDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
