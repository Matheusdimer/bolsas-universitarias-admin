import { Component, OnInit } from '@angular/core';
import { InscricaoBolsa } from "../../../model/inscricao";
import { first, Observable, Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { InscricoesService } from "../inscricoes.service";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { ModalRetornoComponent } from "../modal-retorno/modal-retorno.component";
import { ConfirmacaoModalComponent } from "../../components/confirmacao-modal/confirmacao-modal.component";
import { SituacaoBolsa, SituacoesBolsa } from "../../../model/constants";

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  inscricaoBolsa : InscricaoBolsa = {} as InscricaoBolsa;
  isLoading = false
  $incricaoSubscription?: Subscription

  loadingAnalise = false;

  constructor(
      private route: ActivatedRoute,
      private service: InscricoesService,
      private router: Router,
      private notification: ToastrService,
      private modalService: MdbModalService,
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
          inscricaoBolsa.aluno.endereco.numero + " - " +
          inscricaoBolsa.aluno.endereco.bairro + ", " +
          inscricaoBolsa.aluno.endereco.municipio.nome + " - " +
          inscricaoBolsa.aluno.endereco.municipio.estado.sigla + " - " +
          inscricaoBolsa.aluno.endereco.cep
    }
    return "---";
  }

  turnLoading() {
    this.isLoading = !this.isLoading;
  }

  analisar() {
    this.loadingAnalise = true;
    this.inscricaoBolsa.situacao = SituacaoBolsa.EM_ANALISE;
    this.salvar().subscribe(() => {
      this.notification.success('Inscrição movida para em análise.');
      this.loadingAnalise = false;
    })
  }

  aprovar() {
    this.alterarSituacao(
      'Você tem certeza que deseja aprovar essa inscrição?',
      SituacaoBolsa.APROVADO,
      'Inscrição aprovada com sucesso.'
    );
  }

  reprovar() {
    this.alterarSituacao(
      'Você tem certeza que deseja rejeitar essa inscrição?',
      SituacaoBolsa.REJEITADO,
      'Inscrição reprovada com sucesso.'
    );
  }

  alterarSituacao(message: string, situacao: SituacaoBolsa, success: string) {
    this.modalService.open(ConfirmacaoModalComponent, {
      data: { message }
    })
      .onClose
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.inscricaoBolsa.situacao = situacao;
        this.salvar().subscribe(() => this.notification.success(success));
      });
  }

  salvar(): Observable<InscricaoBolsa> {
    return this.service.save(this.inscricaoBolsa).pipe(first());
  }

  retornar() {
    this.modalService.open(ModalRetornoComponent, {
      modalClass: 'modal-lg',
      data: { inscricao: this.inscricaoBolsa }
    });
  }

  isAnalisar() {
    return this.isAguardandoAnalise() || this.inscricaoBolsa.situacao === 'EM_ANALISE'
  }

  isAguardandoAnalise() {
    return this.inscricaoBolsa.situacao === 'AGUARDANDO_ANALISE'
  }

  formatarSituacao (situacao: string) {
    return SituacoesBolsa[situacao].description;
  }

  getClasseSituacao (situacao: string) {
    return SituacoesBolsa[situacao].class;
  }
}
