import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  login(username: string, password: string): boolean {
    this.loggedIn = !!username;
    return this.loggedIn;
  }

  signup(username: string, password: string, email: string): boolean {
    this.loggedIn = !!(username && password && email);
    return this.loggedIn;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
