import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { InscricoesService } from "../inscricoes.service";
import { first } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-modal-retorno',
  templateUrl: './modal-retorno.component.html',
  styleUrls: ['./modal-retorno.component.scss']
})
export class ModalRetornoComponent implements OnInit {

  inscricao!: any;
  loading = false;

  constructor(
    public modalRef: MdbModalRef<ModalRetornoComponent>,
    private service: InscricoesService,
    private notification: ToastrService
  ) {}

  ngOnInit(): void {
  }

  cancel() {
    this.modalRef.close();
  }

  confirm() {
    if (!this.inscricao) return;

    this.loading = true;

    this.inscricao.situacao = 'AGUARDANDO_CORRECAO';
    this.service.save(this.inscricao)
      .pipe(first())
      .subscribe(() => {
        this.modalRef.close();
        this.notification.success('Inscrição retornada com sucesso.');
      });
  }
}
