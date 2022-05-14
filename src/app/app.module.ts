import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { BolsasComponent } from "./bolsas/bolsas.component";
import { MdbCheckboxModule } from "mdb-angular-ui-kit/checkbox";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { MdbModalModule } from "mdb-angular-ui-kit/modal";
import { MdbPopoverModule } from "mdb-angular-ui-kit/popover";
import { MdbRadioModule } from "mdb-angular-ui-kit/radio";
import { MdbRangeModule } from "mdb-angular-ui-kit/range";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";
import { MdbScrollspyModule } from "mdb-angular-ui-kit/scrollspy";
import { MdbTabsModule } from "mdb-angular-ui-kit/tabs";
import { MdbTooltipModule } from "mdb-angular-ui-kit/tooltip";
import { MdbValidationModule } from "mdb-angular-ui-kit/validation";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingPipe } from "./components/loading.pipe";
import { CadastroComponent } from "./bolsas/cadastro/cadastro.component";
import { TableEditComponent } from "./components/table-edit/table-edit.component";
import { InscricoesComponent } from "./candidaturas/inscricoes.component";
import { FuncionariosComponent } from "./funcionarios/funcionarios.component";
import { InputFileComponent } from "./components/input-file/input-file.component";
import { ToastrModule } from "ngx-toastr";
import { AuthInterceptor } from "./interceptors/auth-interceptor";
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CpfMaskPipe } from './components/cpf/cpf-mask.pipe';
import { CadastroAlunosComponent } from './alunos/cadastro-alunos/cadastro-alunos.component';
import { EditaisComponent } from './bolsas/editais/editais.component';
import { MatSelectModule } from "@angular/material/select";
import { CadastroFuncionariosComponent } from './funcionarios/cadastro-funcionarios/cadastro-funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BolsasComponent,
    LoadingPipe,
    CadastroComponent,
    TableEditComponent,
    InscricoesComponent,
    FuncionariosComponent,
    InputFileComponent,
    SkeletonComponent,
    AlunosComponent,
    CpfMaskPipe,
    CadastroAlunosComponent,
    EditaisComponent,
    CadastroFuncionariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: "toast-bottom-right"}),
    MatSelectModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
