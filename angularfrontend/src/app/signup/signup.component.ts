import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const isSignedUp = this.authService.signup(
      this.username,
      this.password,
      this.email
    );

    if (isSignedUp) {
      this.router.navigate(['/login']);
    } else {
      console.log('Signup failed. Please try again.');
    }
  }
}
