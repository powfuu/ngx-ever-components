import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinputComponent } from './einput.component';

describe('EinputComponent', () => {
  let component: EinputComponent;
  let fixture: ComponentFixture<EinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EinputComponent]
    });
    fixture = TestBed.createComponent(EinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
