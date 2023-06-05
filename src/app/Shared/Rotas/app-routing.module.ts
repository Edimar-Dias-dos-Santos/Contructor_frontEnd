import { HomeComponent } from '../../Components/home/home.component';
import { FormModoRecuperarComponent } from 'src/app/forms/form-modo-recuperar/form-modo-recuperar.component';
import { TipoCadastroComponent } from 'src/app/Components/tipo-cadastro/tipo-cadastro.component';
import { FormUsuarioComponent } from 'src/app/forms/form-usuario/form-usuario.component';
import { PerfilComponent } from '../../Components/perfil/perfil.component';
import { SugestoesComponent } from '../../Components/sugestoes/sugestoes.component';
import { CategoriasComponent } from '../../Components/categorias/categorias.component';
import { LoginComponent } from '../../forms/login/login.component';
import { FormCriacaoLoginComponent } from 'src/app/forms/form-criacao-login/form-criacao-login.component';
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
  {
    path: "usuarioForm",
    component: FormUsuarioComponent
  },
  {
    path: "tipoCadastro",
    component: TipoCadastroComponent
  },
  {
    path: "FormModoRecuperar",
    component: FormModoRecuperarComponent

  },
  {
    path: "FormCriacaoLogin",
    component: FormCriacaoLoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
