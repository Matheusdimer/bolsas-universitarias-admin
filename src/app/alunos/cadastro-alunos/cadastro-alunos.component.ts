import {Component, OnDestroy, OnInit} from '@angular/core';
import { Sexos } from 'src/model/constants';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AlunosService} from "../alunos.service";

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.scss']
})
export class CadastroAlunosComponent  implements OnInit, OnDestroy {

  aluno: Aluno = { usuario: {} } as Aluno
  isEdit = false
  isSaving = false
  isLoading = false
  sexos = Sexos;
  $alunoSubscription?: Subscription

  constructor(
      private route: ActivatedRoute,
      private service: AlunosService,
      private router: Router,
      private notification: ToastrService
  ) { }

  ngOnDestroy(): void {
    this.$alunoSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("alunoId");

    if (!param) {
      return;
    }

    this.isEdit = true;
    this.turnLoading();
    this.$alunoSubscription = this.service
        .find(parseInt(param))
        .subscribe(aluno => {
          this.aluno = aluno
          this.turnLoading()
        });
  }
  turnSaving() {
    this.isSaving = !this.isSaving;
  }

  turnLoading() {
    this.isLoading = !this.isLoading;
  }

  save() {
    this.turnSaving()
    this.service.save(this.aluno).subscribe(() => {
      this.turnSaving()
      this.router.navigate(['/alunos'])
      this.notification.success('Aluno salvo com sucesso')
    })
  }
}
