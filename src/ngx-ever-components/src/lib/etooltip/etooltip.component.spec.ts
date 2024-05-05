import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtooltipComponent } from './etooltip.component';

describe('EtooltipComponent', () => {
  let component: EtooltipComponent;
  let fixture: ComponentFixture<EtooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtooltipComponent]
    });
    fixture = TestBed.createComponent(EtooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
