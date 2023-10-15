import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CurrentBookingComponent } from './current-booking/current-booking.component';
import { DispensableComponent } from './dispensable/dispensable.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id/booking', component: BookingComponent },
  { path: 'current-bookings', component: CurrentBookingComponent },
  {path: 'dispensable', component: DispensableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
