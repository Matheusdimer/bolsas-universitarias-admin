import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})
export class CadastroFuncionariosComponent implements OnInit, OnDestroy {

  funcionario: Funcionario = { usuario: {} } as Funcionario
  isEdit = false
  isSaving = false
  isLoading = false
  $funcionarioSubscription?: Subscription

  constructor(
    private route: ActivatedRoute,
    private service: FuncionariosService,
    private router: Router,
    private notification: ToastrService
  ) { }

  ngOnDestroy(): void {
    this.$funcionarioSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("funcionarioId");

    if (!param) {
      return;
    }

    this.isEdit = true;
    this.turnLoading();
    this.$funcionarioSubscription = this.service
      .find(parseInt(param))
      .subscribe(funcionario => {
        this.funcionario = funcionario
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
    this.service.save(this.funcionario).subscribe(() => {
      this.turnSaving()
      this.router.navigate(['/funcionarios'])
      this.notification.success('Funcionário salvo com sucesso')
    })
  }

}
