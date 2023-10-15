import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private url = "User/checkuser";
  private email: string = "";
  private user: string = "";

  constructor(private http: HttpClient) {}

  public loginUser(username: string, password: string): Observable<User> {
    const requestBody = {
      username: username,
      password: password,
    };
    return this.http.post<User>(
      `${environment.apiUrl}/${this.url}`,
      requestBody
    );
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getUser(): string {
    return this.user;
  }

  public setUser(user: string): void {
    this.user = user;
  }
}
