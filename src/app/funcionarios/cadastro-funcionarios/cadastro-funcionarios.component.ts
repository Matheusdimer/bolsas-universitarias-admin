import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})
export class CadastroFuncionariosComponent implements OnInit {

  funcionario: Funcionario = { usuario: {} } as Funcionario
  isEdit = false
  isSaving = false
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private service: FuncionariosService,
    private router: Router,
    private notification: ToastrService
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("funcionarioId");

    if (!param) {
      return;
    }

    this.isEdit = true;
    this.turnLoading();

    this.service
      .find(parseInt(param))
      .subscribe(funcionario => {
        this.funcionario = funcionario
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
