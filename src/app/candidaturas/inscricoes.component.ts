import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {InscricaoBolsa, SituacaoBolsa} from "../../model/inscricao";
import {InscricoesService} from "./inscricoes.service";

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.component.html',
  styleUrls: ['./inscricoes.component.scss']
})
export class InscricoesComponent implements OnInit {
  iscricoes$: Observable<InscricaoBolsa[]> = this.inscricoesService.findAll();

  constructor(private inscricoesService: InscricoesService) {}

  ngOnInit(): void {}

  formatarSituacao  = (situacao: any) =>{
    return this.getConfig(situacao)[0];
  }

  getMessage  = (situacao: any) =>{
    return this.getConfig(situacao)[1];
  }

  getConfig = function (situacao: any){
    switch (situacao) {
      case 'AGUARDANDO_ANALISE':
        return ['Aguardando análise', 'badge-info'];
      case 'EM_ANALISE':
        return ['Em análise', 'badge-info'];
      case 'APROVADO':
        return ['Aprovado', 'badge-success'];
      case 'REJEITADO':
        return ['Rejeitado', 'badge-error'];
      case 'AGUARDANDO_CORRECAO':
        return ['Aguardando Correção', 'badge-warning'];
    }
    return ['Erro', 'badge-error'];
  }

  reload() {
    this.iscricoes$ = this.inscricoesService.findAll();
  }
}
