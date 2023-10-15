import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../service/booking.service'; 
import { BookingDetails } from '../interfaces/booking-details.interface'; 
import { LoginService } from '../service/login.service';


@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"],
})
export class BookingComponent implements OnInit {
  name: string = this.loginService.getUser();
  hotel: string = "";
  duration: string = "";
  phoneNo: string = "";
  emailId: string = this.loginService.getEmail();

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve the selected hotel from the state
    const hotel = history.state.hotel;

    // Use the hotel information to populate the "hotel" field
    if (hotel) {
      this.hotel = hotel.name;
    }
  }

  onSubmit() {
    // Check if all fields have value

    if (
      this.name &&
      this.hotel &&
      this.duration &&
      this.phoneNo &&
      this.emailId
    ) {
      const newBooking: BookingDetails = {
        name: this.name,
        hotel: this.hotel,
        duration: this.duration,
        phoneNo: this.phoneNo,
        emailId: this.emailId,
      };

      // Call the createUser function from SignupService
      this.bookingService.createBooking(newBooking).subscribe(
        (response) => {
          console.log("Booking created successfully:", response);
          this.router.navigate(["/hotel"]);
        },
        (error) => {
          console.error("Error creating booking:", error);
        }
      );
    } else {
      console.log("Please fill in all the fields.");
    }
  }
}
