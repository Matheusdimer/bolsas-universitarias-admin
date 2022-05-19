import { Component, OnDestroy, OnInit } from '@angular/core';
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { Bolsa, Edital } from "../../../../model/bolsa";
import { BolsasService } from "../../bolsas.service";
import { Subscription } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-edital-modal',
  templateUrl: './edital-modal.component.html',
  styleUrls: ['./edital-modal.component.scss']
})
export class EditalModalComponent implements OnInit, OnDestroy {

  bolsa?: Bolsa;
  edital: Edital = {} as Edital;

  saving = false;
  $saveSubscription?: Subscription;

  constructor(
    public modalRef: MdbModalRef<EditalModalComponent>,
    private bolsasService: BolsasService,
    private notification: ToastrService
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.$saveSubscription?.unsubscribe();
  }

  save() {
    if (!this.bolsa) return;

    this.saving = true;

    if (!this.edital.id) {
      this.bolsa.editais?.push(this.edital);
    }

    this.$saveSubscription = this.bolsasService.save(this.bolsa)
      .subscribe((bolsa) => {
        this.saving = false;
        this.modalRef.close(bolsa);
        this.notification.success('Edital salvo com sucesso.');
      });
  }
}
