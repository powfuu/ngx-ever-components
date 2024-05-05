import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmodalComponent } from './emodal.component';

describe('EmodalComponent', () => {
  let component: EmodalComponent;
  let fixture: ComponentFixture<EmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmodalComponent]
    });
    fixture = TestBed.createComponent(EmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
