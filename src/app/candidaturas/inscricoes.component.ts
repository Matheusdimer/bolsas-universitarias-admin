import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { InscricaoBolsa } from "../../model/inscricao";
import { InscricoesService } from "./inscricoes.service";
import { SituacoesBolsa } from "../../model/constants";

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.component.html',
  styleUrls: ['./inscricoes.component.scss']
})
export class InscricoesComponent implements OnInit {
  iscricoes$: Observable<InscricaoBolsa[]> = this.inscricoesService.findAll();

  constructor(private inscricoesService: InscricoesService) {}

  ngOnInit(): void {}

  formatarSituacao (situacao: string) {
    return SituacoesBolsa[situacao].description;
  }

  getClasseSituacao (situacao: string) {
    return SituacoesBolsa[situacao].class;
  }

  reload() {
    this.iscricoes$ = this.inscricoesService.findAll();
  }
}
