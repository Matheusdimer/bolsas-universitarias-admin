import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-bolsas',
  templateUrl: './bolsas.component.html',
  styleUrls: ['./bolsas.component.scss']
})
export class BolsasComponent implements OnInit {

  token = this.authService.token

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

}
