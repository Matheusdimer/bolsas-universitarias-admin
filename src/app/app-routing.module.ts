import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsasComponent } from './bolsas/bolsas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'bolsas',
    component: BolsasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
