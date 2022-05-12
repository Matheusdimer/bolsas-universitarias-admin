import { Component, OnInit } from '@angular/core';
import { Bolsa, Requisito } from "../../../model/bolsa";
import { BolsasService } from "../bolsas.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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
    private notification: ToastrService
  ) {}

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

}
