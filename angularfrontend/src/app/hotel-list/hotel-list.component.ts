import { Component } from '@angular/core';
import { HotelService } from '../service/hotel.service'; 
import { Hotel } from '../interfaces/hotel.interface'; 

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})
export class HotelListComponent {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService
      .getHotels()
      .subscribe((result: Hotel[]) => (this.hotels = result));
  }
}
