import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { apiUrl } from "src/constants/constants";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private path = apiUrl + "/auth";
  private _token?: string | null;

  constructor(private http: HttpClient, private router: Router) {}

  login(user: User): Observable<TokenResponse> {
    return this.http
      .post<TokenResponse>(this.path, user)
      .pipe(tap(this.saveToken));
  }

  private saveToken(response: TokenResponse) {
    this._token = response.token;
    localStorage.setItem("token", this._token);
  }

  private loadToken() {
    this._token = localStorage.getItem("token");
    return this._token;
  }

  get token() {
    return this.hasToken() ? this._token : this.loadToken();
  }

  hasToken(): boolean {
    return !!this._token;
  }

  logout(): void {
    this._token = null;
    localStorage.clear();
    this.router.navigate([""]);
  }
}
