import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EflexComponent } from './eflex.component';

describe('EflexComponent', () => {
  let component: EflexComponent;
  let fixture: ComponentFixture<EflexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EflexComponent]
    });
    fixture = TestBed.createComponent(EflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
