import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthGuard } from '../auth.guard';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dispensable',
  templateUrl: './dispensable.component.html',
  styleUrls: ['./dispensable.component.css'],
})
export class DispensableComponent
  implements OnInit, OnDestroy, AfterViewInit, AfterContentInit
{
  private httpSubscription!: Subscription;

  constructor(private http: HttpClient, private authGuard: AuthGuard) {}

  ngOnInit(): void {
    this.httpSubscription = this.http
      .get('https://api.example.com/hotels')
      .pipe(
        map((data) => {
          console.log('Received data:', data);
        }),
        catchError((error) => {
          console.error('Error fetching data:', error);
          return throwError(error);
        })
      )
      .subscribe();
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit of HotelDetailsComponent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit of HotelDetailsComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy of HotelDetailsComponent');
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }
}
