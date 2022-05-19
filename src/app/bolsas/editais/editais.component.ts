import { Component, OnInit } from '@angular/core';
import { Bolsa, Edital, Requisito } from "../../../model/bolsa";
import { BolsasService } from "../bolsas.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { EditalModalComponent } from "./edital-modal/edital-modal.component";
import { ConfirmacaoModalComponent } from "../../components/confirmacao-modal/confirmacao-modal.component";
import { finalize, map, Observable, switchMap } from "rxjs";

@Component({
  selector: 'app-editais',
  templateUrl: './editais.component.html',
  styleUrls: ['./editais.component.scss']
})
export class EditaisComponent implements OnInit {

  isSaving = false;
  isLoading = false;

  bolsa?: Bolsa;

  constructor(
    private service: BolsasService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: ToastrService,
    private modalService: MdbModalService
  ) {
  }

  turnSaving() {
    this.isSaving = !this.isSaving;
  }

  turnLoading() {
    this.isLoading = !this.isLoading;
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("bolsaId");

    if (!param) {
      return;
    }

    this.turnLoading();

    this.service
      .find(parseInt(param))
      .subscribe(this.setBolsa.bind(this));
  }

  setBolsa(bolsa: Bolsa) {
    this.bolsa = bolsa;
    this.turnLoading();
  }

  save(): void {
    if (!this.bolsa) return;

    this.turnSaving();

    this.service.save(this.bolsa).subscribe(() => {
      this.router.navigate(["/bolsas"]);
      this.turnSaving();
      this.notification.success('Editais salvos com sucesso.');
    });
  }

  openModal(edital?: Edital) {
    const data: any = { bolsa: this.bolsa };

    if (edital) {
      data.edital = edital;
    }

    this.modalService
      .open(EditalModalComponent, {
        modalClass: 'modal-lg',
        data
      })
      .onClose
      .subscribe((bolsa: Bolsa) => {
        if (bolsa) {
          this.bolsa = bolsa;
        }
      });
  }

  removeEdital(edital: Edital) {
    this.modalService.open(ConfirmacaoModalComponent, {
      data: {
        message: 'Você tem certeza que deseja remover esse edital?'
      }
    })
      .onClose
      .pipe(
        switchMap((confirm, index) => confirm
          ? this.service.removeEdital(this.bolsa!, edital)
            .pipe(finalize(this.ngOnInit.bind(this)))
          : new Observable()))
      .subscribe();
  }
}
