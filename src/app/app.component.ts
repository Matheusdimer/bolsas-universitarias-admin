import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BolsasService } from './bolsas/bolsas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  // @ts-ignore
  bolsas: Observable<Bolsa[]> = [];

  constructor(
    private service: BolsasService
  ) {}
  
  ngOnInit(): void {
    this.load()
  }

  load() {
    this.bolsas = this.service.findAll();
  }
}
