import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { BolsasService } from "../../bolsas/bolsas.service";

@Component({
  selector: 'app-confirmacao-modal',
  templateUrl: './confirmacao-modal.component.html',
  styleUrls: ['./confirmacao-modal.component.scss']
})
export class ConfirmacaoModalComponent implements OnInit {

  message: string = 'Tem certeza que deseja realizar essa ação?';

  constructor(
    public modalRef: MdbModalRef<ConfirmacaoModalComponent>,
  ) {}

  ngOnInit(): void {
  }

  cancel() {
    this.modalRef.close(false);
  }

  confirm() {
    this.modalRef.close(true);
  }

}
