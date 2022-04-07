import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false

  user: User = {
    username: '',
    password: ''
  }

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.service.login(this.user)
      .pipe(startWith(() => this.loading = true))
      .subscribe(response => {
        this.loading = false
        this.router.navigate(['/bolsas'])
      });
  }

}
