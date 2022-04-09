import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {
  funcionarios$ = this.service.findAll();
  constructor(
    private service: FuncionariosService
  ) { }

  ngOnInit(): void {
  }

}
