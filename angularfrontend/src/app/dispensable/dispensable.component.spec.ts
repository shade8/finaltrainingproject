import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensableComponent } from './dispensable.component';

describe('DispensableComponent', () => {
  let component: DispensableComponent;
  let fixture: ComponentFixture<DispensableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispensableComponent]
    });
    fixture = TestBed.createComponent(DispensableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
