import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { User } from "../interfaces/user.interface";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
  username: string = "";
  password: string = "";
  email: string = "";
  firstname: string = "";
  lastname: string = "";
  place: string = "";

  constructor(private signupService: SignupService, private router: Router) {}

  onSubmit() {
    // Check if all fields have values
    if (
      this.username &&
      this.password &&
      this.email &&
      this.firstname &&
      this.lastname &&
      this.place
    ) {
      const newUser: User = {
        id: 0, // You may need to handle generating IDs appropriately
        name: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        place: this.place,
        email: this.email,
        password: this.password,
      };

      // Call the createUser function from SignupService
      this.signupService.createUser(newUser).subscribe(
        (response) => {
          console.log("User created successfully:", response);
          this.router.navigate(["/login"]);
        },
        (error) => {
          console.error("Error creating user:", error);
        }
      );
    } else {
      console.log("Please fill in all the fields.");
    }
  }
}
