import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../service/booking.service'; 
import { BookingDetails } from '../interfaces/booking-details.interface'; 


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent  {
  bookingDetails: BookingDetails =
   {
    name: '',
    hotel: '',
    duration: '',
    phoneno: '',
    emailid:''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public bookingService: BookingService
  ) {}


  confirmBooking() {
    console.log(this.bookingDetails.name)
    this.bookingService.saveBookingDetails(this.bookingDetails);
    
  }
}
