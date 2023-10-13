import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/hotel.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private url = 'Hotel';

  constructor(private http: HttpClient) {}

  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${environment.apiUrl}/${this.url}`);
  }
}
