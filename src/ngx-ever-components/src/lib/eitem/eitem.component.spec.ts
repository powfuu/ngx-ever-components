import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EitemComponent } from './eitem.component';

describe('EitemComponent', () => {
  let component: EitemComponent;
  let fixture: ComponentFixture<EitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EitemComponent]
    });
    fixture = TestBed.createComponent(EitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
