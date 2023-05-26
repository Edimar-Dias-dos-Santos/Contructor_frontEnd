import { HomeComponent } from './home/home.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent

  },
  {
    path: "cadastrar",
    component: CadastroComponent
  },
  {
    path: "destaques",
    component: DestaquesComponent
  },
  {
    path: "categorias",
    component: CategoriasComponent
  },
  {
    path: "sugestoes",
    component: SugestoesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
