import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loading = false;
  error: string | null = null;

  user: User = {
    username: "",
    password: "",
  };

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit(): void {}

  reset() {
    this.loading = false;
    this.error = null;
  }

  onSubmit(): void {
    this.loading = true;
    this.service.login(this.user).subscribe({
      next: this.loginSuccess.bind(this),
      error: this.handleError.bind(this),
    });
  }

  loginSuccess() {
    this.reset();
    this.router.navigate(["/bolsas"]);
  }

  handleError(error: HttpErrorResponse) {
    this.reset();
    this.error = error.error.message;
  }
}
