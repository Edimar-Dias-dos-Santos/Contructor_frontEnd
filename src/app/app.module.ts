import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { CadastroComponent } from './Components/cadastro/cadastro.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { SugestoesComponent } from './Components/sugestoes/sugestoes.component';
import { FormUsuarioComponent } from './Components/form-usuario/form-usuario.component';
import { PerfilComponent } from './Components/perfil/perfil.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    CategoriasComponent,
    SugestoesComponent,
    FormUsuarioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
