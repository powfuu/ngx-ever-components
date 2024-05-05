import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbadgeComponent } from './ebadge.component';

describe('EbadgeComponent', () => {
  let component: EbadgeComponent;
  let fixture: ComponentFixture<EbadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EbadgeComponent]
    });
    fixture = TestBed.createComponent(EbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
