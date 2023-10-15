import { Injectable } from '@angular/core';
import { BookingDetails } from '../interfaces/booking-details.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  private url = "Booking";

  constructor(private http: HttpClient, private loginService: LoginService) {}

  public getBookings(): Observable<BookingDetails[]> {
    const email = this.loginService.getEmail(); // Get the email from LoginService
    // Ensure email is not null or undefined before using it
    if (email) {
      // Modify the URL to include the email as a parameter
      const modifiedUrl = `${environment.apiUrl}/${this.url}/${email}`;
      return this.http.get<BookingDetails[]>(modifiedUrl);
    } else {
      // Handle the case where email is null or undefined
      return new Observable(); // You should return appropriate Observable here
    }
  }

  public createBooking(user: BookingDetails): Observable<BookingDetails> {
    return this.http.post<BookingDetails>(
      `${environment.apiUrl}/${this.url}`,
      user
    );
  }
}
