import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsasComponent } from './bolsas/bolsas.component';
import { LoginComponent } from './login/login.component';
import {CadastroComponent} from "./bolsas/cadastro/cadastro.component";

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
    path: 'bolsas/cadastro/:bolsaId',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
