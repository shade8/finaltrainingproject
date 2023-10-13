
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { BookingDetails } from '../interfaces/booking-details.interface';

@Component({
  selector: 'app-current-booking',
  templateUrl: './current-booking.component.html',
  styleUrls: ['./current-booking.component.css'],
})
export class CurrentBookingComponent implements OnInit {
  bookings!: BookingDetails[]; 

  constructor(public bookingService: BookingService) {}

  ngOnInit(): void {
    
    this.bookings = this.bookingService.savedBookingDetails
  }
}
