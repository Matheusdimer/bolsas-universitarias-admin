import { Component, OnInit } from '@angular/core';
import { Sexos } from 'src/model/constants';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.scss']
})
export class CadastroAlunosComponent implements OnInit {

  aluno : Aluno = {} as Aluno;
  isEdit = false;
  isLoading = false;
  sexos = Sexos;
  constructor() { }

  ngOnInit(): void {
  }
  save(){}

}
