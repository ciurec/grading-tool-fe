import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponentShell } from './details-component-shell';

describe('AppShell', () => {
  let component: DetailsComponentShell;
  let fixture: ComponentFixture<DetailsComponentShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponentShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponentShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
