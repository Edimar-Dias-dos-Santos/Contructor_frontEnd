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
import { FormUsuarioComponent } from './forms/form-usuario/form-usuario.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { TipoCadastroComponent } from './Components/tipo-cadastro/tipo-cadastro.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CategoriasComponent,
    SugestoesComponent,
    FormUsuarioComponent,
    PerfilComponent,
    FormUsuarioComponent,
    TipoCadastroComponent
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
