import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  private url = "Signup";

  constructor(private http: HttpClient) {}

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/${this.url}`, user);
  }

  
}
