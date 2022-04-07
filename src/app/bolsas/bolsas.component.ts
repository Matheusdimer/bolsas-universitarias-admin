import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { BolsasService } from './bolsas.service';

@Component({
  selector: 'app-bolsas',
  templateUrl: './bolsas.component.html',
  styleUrls: ['./bolsas.component.scss']
})
export class BolsasComponent implements OnInit {

  bolsas$: Observable<Bolsa[]> = this.bolsasService.findAll();

  constructor(
    private authService: AuthService,
    private bolsasService: BolsasService
  ) { }

  ngOnInit(): void {

  }

  reload() {
    this.bolsas$ = this.bolsasService.findAll();
  }

}
