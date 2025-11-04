import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponentShell } from './main-component-shell';

describe('AppShell', () => {
  let component: MainComponentShell;
  let fixture: ComponentFixture<MainComponentShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponentShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponentShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
