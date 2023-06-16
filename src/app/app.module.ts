import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './Shared/Rotas/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './forms/login/login.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { SugestoesComponent } from './Components/sugestoes/sugestoes.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { TipoCadastroComponent } from './Components/tipo-cadastro/tipo-cadastro.component';
import { FormModoRecuperarComponent } from './forms/form-modo-recuperar/form-modo-recuperar.component';
import { FormUsuarioComponent } from './forms/form-usuario/form-usuario.component';
import { FormCriacaoLoginComponent } from './forms/form-criacao-login/form-criacao-login.component';
import { MenuFinalCadastroComponent } from './Components/menu-final-cadastro/menu-final-cadastro.component';
import { ConstructorADMComponent } from './constructorADM/constructor-adm/constructor-adm.component';





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
    ConstructorADMComponent
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
