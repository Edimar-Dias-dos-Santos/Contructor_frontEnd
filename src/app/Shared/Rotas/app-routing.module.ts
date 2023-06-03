import { HomeComponent } from '../../Components/home/home.component';
import { FormUsuarioComponent } from 'src/app/Components/form-usuario/form-usuario.component';
import { PerfilComponent } from '../../Components/perfil/perfil.component';
import { SugestoesComponent } from '../../Components/sugestoes/sugestoes.component';
import { CategoriasComponent } from '../../Components/categorias/categorias.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
