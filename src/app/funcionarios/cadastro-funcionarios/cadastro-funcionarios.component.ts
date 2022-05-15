import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})
export class CadastroFuncionariosComponent implements OnInit {

  funcionario: Funcionario = {} as Funcionario
  isEdit = false
  isSaving = false

  constructor() { }

  ngOnInit(): void {
  }

  save() {

  }

}
