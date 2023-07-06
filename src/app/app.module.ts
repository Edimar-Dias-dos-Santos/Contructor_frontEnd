import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './Shared/Rotas/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { SugestoesComponent } from './forms/sugestoes/sugestoes.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { TipoCadastroComponent } from './Components/tipo-cadastro/tipo-cadastro.component';
import { FormModoRecuperarComponent } from './forms/form-modo-recuperar/form-modo-recuperar.component';
import { FormUsuarioComponent } from './forms/form-usuario/form-usuario.component';
import { FormCriacaoLoginComponent } from './forms/form-criacao-login/form-criacao-login.component';
import { MenuFinalCadastroComponent } from './Components/menu-final-cadastro/menu-final-cadastro.component';
import { ConstructorADMComponent } from './constructorADM/constructor-adm/constructor-adm.component';
import { ReclamacoesADMComponent } from './constructorADM/reclamacoes-adm/reclamacoes-adm.component';
import { EstatisticasADMComponent } from './constructorADM/estatisticas-adm/estatisticas-adm.component';
import { ControleUsuariosADMComponent } from './constructorADM/controle-usuarios-adm/controle-usuarios-adm.component';
import { ControleAdministradoresADMComponent } from './constructorADM/controle-administradores-adm/controle-administradores-adm.component';
import { FormCliFornecComponent } from './forms/form-cli-fornec/form-cli-fornec.component';
import { PerfilUsuarioComponent } from './PerfilUsuario/perfil-usuario/perfil-usuario.component';
import { UsuarioImgsComponent } from './PerfilUsuario/usuario-imgs/usuario-imgs.component';
import { UsuarioimgPerfilComponent } from './PerfilUsuario/usuarioimg-perfil/usuarioimg-perfil.component';
import { HeaderADMComponent } from './constructorADM/header-adm/header-adm.component';
import { headerPerfilComponent } from './PerfilUsuario/headerPerfil/header-perfil.component';
import { CliFornecCrudComponent } from './PerfilUsuario/cli-fornec-crud/cli-fornec-crud.component';
import { AvalicaoComponent } from './PerfilUsuario/avalicao/avalicao.component';






@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    FooterComponent,
    FormModoRecuperarComponent,
    FormUsuarioComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    SugestoesComponent,
    TipoCadastroComponent,
    FormCriacaoLoginComponent,
    MenuFinalCadastroComponent,
    ConstructorADMComponent,
    ReclamacoesADMComponent,
    EstatisticasADMComponent,
    ControleUsuariosADMComponent,
    ControleAdministradoresADMComponent,
    FormCliFornecComponent,
    PerfilUsuarioComponent,
    UsuarioImgsComponent,
    UsuarioimgPerfilComponent,
    HeaderADMComponent,
    headerPerfilComponent,
    CliFornecCrudComponent,
    AvalicaoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
