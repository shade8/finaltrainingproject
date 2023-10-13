import { Injectable } from '@angular/core';
import { BookingDetails } from '../interfaces/booking-details.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  savedBookingDetails: BookingDetails[] = [];

  saveBookingDetails(details: BookingDetails) {
    this.savedBookingDetails.push(details);
  }

  getSavedBookingDetails(): BookingDetails[] {
    return this.savedBookingDetails;
  }
}
