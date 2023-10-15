
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { BookingDetails } from '../interfaces/booking-details.interface';


@Component({
  selector: "app-current-booking",
  templateUrl: "./current-booking.component.html",
  styleUrls: ["./current-booking.component.css"],
})
export class CurrentBookingComponent implements OnInit {
  bookings: BookingDetails[] = []; // Initialize as an empty array

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    // Call getBookings() to make the GET request and subscribe to the Observable
    this.bookingService.getBookings().subscribe(
      (data) => {
        this.bookings = data; // Update bookings with the retrieved data
      },
      (error) => {
        console.error("Error fetching bookings:", error);
      }
    );
  }
}
