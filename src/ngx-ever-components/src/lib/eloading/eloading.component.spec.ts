import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloadingComponent } from './eloading.component';

describe('EloadingComponent', () => {
  let component: EloadingComponent;
  let fixture: ComponentFixture<EloadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EloadingComponent]
    });
    fixture = TestBed.createComponent(EloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
