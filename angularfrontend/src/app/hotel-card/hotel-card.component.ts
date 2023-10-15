import { Component, Input } from '@angular/core';
import { Hotel } from '../interfaces/hotel.interface';
import { Router } from "@angular/router";

@Component({
  selector: "app-hotel-card",
  templateUrl: "./hotel-card.component.html",
  styleUrls: ["./hotel-card.component.css"],
})
export class HotelCardComponent {
  @Input() hotel!: Hotel;
  constructor(private router: Router) {}

  bookHotel() {
    // Navigate to the booking page and pass the selected hotel ID
    this.router.navigate(["/hotels", this.hotel.id, "booking"], {
      state: { hotel: this.hotel },
    });
  }
}
