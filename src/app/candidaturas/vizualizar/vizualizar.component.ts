import { Component, OnInit } from '@angular/core';
import {InscricaoBolsa} from "../../../model/inscricao";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {InscricoesService} from "../inscricoes.service";
import {Documento} from "../../../model/bolsa";

@Component({
  selector: 'app-vizualizar',
  templateUrl: './vizualizar.component.html',
  styleUrls: ['./vizualizar.component.scss']
})
export class VizualizarComponent implements OnInit {

  inscricaoBolsa : InscricaoBolsa = {} as InscricaoBolsa;
  isLoading = false
  $incricaoSubscription?: Subscription

  constructor(
      private route: ActivatedRoute,
      private service: InscricoesService,
      private router: Router,
      private notification: ToastrService
  ) { }

  ngOnDestroy(): void {
    this.$incricaoSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("id");

    if (!param) {
      return;
    }

    this.turnLoading();
    this.$incricaoSubscription = this.service
        .find(parseInt(param))
        .subscribe(inscricao => {
          this.inscricaoBolsa = inscricao
          this.turnLoading()
        });
  }
  getEndereco = function (inscricaoBolsa: InscricaoBolsa){
    if(inscricaoBolsa.aluno.endereco){
      return inscricaoBolsa.aluno.endereco.logradouro + ", " +
          inscricaoBolsa.aluno.endereco.numero + ", " +
          inscricaoBolsa.aluno.endereco.bairro + ", " +
          inscricaoBolsa.aluno.endereco.municipio.nome + ", " +
          inscricaoBolsa.aluno.endereco.municipio.estado.nome + ", " +
          inscricaoBolsa.aluno.endereco.cep
    }
    return "";
  }
  //TODO esse arquivo id pode estar vindo do lugar errado
  getArquivo = function (inscricaoBolsa: Documento){
    console.log(inscricaoBolsa);
    if(inscricaoBolsa.documento && inscricaoBolsa.documento.arquivoId){
      return inscricaoBolsa.documento.arquivoId;
    }
    return 0;
  }
  turnLoading() {
    this.isLoading = !this.isLoading;
  }
}
