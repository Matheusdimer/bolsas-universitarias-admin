import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private path = apiUrl + '/auth';
  private _token?: string | null;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.path, user).pipe((response) => {
      response.subscribe((response) => this.saveToken(response.token));
      return response;
    });
  }

  private saveToken(token: string) {
    this._token = token;
    localStorage.setItem('token', token);
  }

  private loadToken() {
    this._token = localStorage.getItem('token');
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
    this.router.navigate(['']);
  }
}
