import { Component, OnDestroy, OnInit } from '@angular/core';
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { Bolsa, Edital } from "../../../../model/bolsa";
import { BolsasService } from "../../bolsas.service";

@Component({
  selector: 'app-edital-modal',
  templateUrl: './edital-modal.component.html',
  styleUrls: ['./edital-modal.component.scss']
})
export class EditalModalComponent implements OnInit {

  bolsa?: Bolsa;
  edital: Edital = {} as Edital;

  saving = false;

  constructor(
    public modalRef: MdbModalRef<EditalModalComponent>,
    private bolsasService: BolsasService
  ) {}

  ngOnInit(): void {
  }

  save() {
    if (!this.bolsa) return;

    this.saving = true;

    this.bolsa.editais?.push(this.edital);
    this.bolsasService.save(this.bolsa).subscribe((bolsa) => {
      this.saving = false;
      this.modalRef.close(bolsa);
    });
  }
}
