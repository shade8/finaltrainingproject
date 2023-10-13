import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBookingComponent } from './current-booking.component';

describe('CurrentBookingComponent', () => {
  let component: CurrentBookingComponent;
  let fixture: ComponentFixture<CurrentBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentBookingComponent]
    });
    fixture = TestBed.createComponent(CurrentBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
