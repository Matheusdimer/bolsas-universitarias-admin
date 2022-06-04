import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsasComponent } from './bolsas/bolsas.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from "./bolsas/cadastro/cadastro.component";
import { InscricoesComponent } from "./candidaturas/inscricoes.component";
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AlunosComponent } from './alunos/alunos.component';
import { EditaisComponent } from "./bolsas/editais/editais.component";
import { CadastroFuncionariosComponent } from './funcionarios/cadastro-funcionarios/cadastro-funcionarios.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'bolsas',
    component: BolsasComponent
  },
  {
    path: 'bolsas/cadastro',
    component: CadastroComponent
  },
  {
    path: 'bolsas/editais/:bolsaId',
    component: EditaisComponent
  },
  {
    path: 'bolsas/cadastro/:bolsaId',
    component: CadastroComponent
  },
  {
    path: 'inscricoes',
    component: InscricoesComponent
  },
  {
    path: 'inscricoes/visualizar',
    component: InscricoesComponent
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent
  },
  {
    path: 'funcionarios/cadastro',
    component: CadastroFuncionariosComponent
  },
  {
    path: 'funcionarios/cadastro/:funcionarioId',
    component: CadastroFuncionariosComponent
  },
  {
    path: 'alunos',
    component: AlunosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
