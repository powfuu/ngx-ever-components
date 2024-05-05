import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcontentComponent } from './econtent.component';

describe('EcontentComponent', () => {
  let component: EcontentComponent;
  let fixture: ComponentFixture<EcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcontentComponent]
    });
    fixture = TestBed.createComponent(EcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
