import { HomeComponent } from '../../Components/home/home.component';
import { PerfilComponent } from '../../Components/perfil/perfil.component';
import { SugestoesComponent } from '../../Components/sugestoes/sugestoes.component';
import { CategoriasComponent } from '../../Components/categorias/categorias.component';
import { CadastroComponent } from '../../Components/cadastro/cadastro.component';
import { LoginComponent } from '../../Components/login/login.component';
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
    path: "categorias",
    component: CategoriasComponent
  },
  {
    path: "sugestoes",
    component: SugestoesComponent
  },
  {
    path: "perfil",
    component: PerfilComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
