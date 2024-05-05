import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbuttonComponent } from './ebutton.component';

describe('EbuttonComponent', () => {
  let component: EbuttonComponent;
  let fixture: ComponentFixture<EbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EbuttonComponent]
    });
    fixture = TestBed.createComponent(EbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
