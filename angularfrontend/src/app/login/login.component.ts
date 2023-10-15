import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.loginService.loginUser( username, password ).subscribe(
      (user) => {
        // Successful login, store email in LoginService and navigate to hotels
        this.loginService.setEmail(user.email);
        this.loginService.setUser(user.name);
        this.router.navigate(["/hotels"]);
      },
      (error) => {
        // Error, navigate to signup
        this.router.navigate(["/signup"]);
      }
    );
  }
}
