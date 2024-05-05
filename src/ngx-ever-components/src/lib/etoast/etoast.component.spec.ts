import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtoastComponent } from './etoast.component';

describe('EtoastComponent', () => {
  let component: EtoastComponent;
  let fixture: ComponentFixture<EtoastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtoastComponent]
    });
    fixture = TestBed.createComponent(EtoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
