import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcardComponent } from './ecard.component';

describe('EcardComponent', () => {
  let component: EcardComponent;
  let fixture: ComponentFixture<EcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcardComponent]
    });
    fixture = TestBed.createComponent(EcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
