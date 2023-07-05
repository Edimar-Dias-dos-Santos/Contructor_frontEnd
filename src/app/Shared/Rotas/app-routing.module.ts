import { HomeComponent } from '../../Components/home/home.component';
import { FormModoRecuperarComponent } from 'src/app/forms/form-modo-recuperar/form-modo-recuperar.component';
import { TipoCadastroComponent } from 'src/app/Components/tipo-cadastro/tipo-cadastro.component';
import { FormUsuarioComponent } from 'src/app/forms/form-usuario/form-usuario.component';
import { PerfilComponent } from '../../Components/perfil/perfil.component';
import { SugestoesComponent } from '../../forms/sugestoes/sugestoes.component';
import { CategoriasComponent } from '../../Components/categorias/categorias.component';
import { LoginComponent } from '../../Components/login/login.component';
import { FormCriacaoLoginComponent } from 'src/app/forms/form-criacao-login/form-criacao-login.component';
import { MenuFinalCadastroComponent } from 'src/app/Components/menu-final-cadastro/menu-final-cadastro.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamacoesADMComponent } from 'src/app/constructorADM/reclamacoes-adm/reclamacoes-adm.component';
import { EstatisticasADMComponent } from 'src/app/constructorADM/estatisticas-adm/estatisticas-adm.component';
import { ControleUsuariosADMComponent } from 'src/app/constructorADM/controle-usuarios-adm/controle-usuarios-adm.component';
import { ControleAdministradoresADMComponent } from 'src/app/constructorADM/controle-administradores-adm/controle-administradores-adm.component';
import { FormCliFornecComponent } from 'src/app/forms/form-cli-fornec/form-cli-fornec.component';
import { UsuarioImgsComponent } from 'src/app/PerfilUsuario/usuario-imgs/usuario-imgs.component';
import { UsuarioimgPerfilComponent } from 'src/app/PerfilUsuario/usuarioimg-perfil/usuarioimg-perfil.component';
import {ConstructorADMComponent} from 'src/app/constructorADM/constructor-adm/constructor-adm.component'
import {PerfilUsuarioComponent} from 'src/app/PerfilUsuario/perfil-usuario/perfil-usuario.component';
import { CliFornecCrudComponent } from 'src/app/PerfilUsuario/cli-fornec-crud/cli-fornec-crud.component';




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
  },
  {
    path: "MenuFinalCadastroComponent",
    component: MenuFinalCadastroComponent
  },
  {
    path: "reclamacoesADM",
    component: ReclamacoesADMComponent
  },
  {
    path:"EstatisticasADM",
    component: EstatisticasADMComponent
  },
  {
    path: "ControleUsuariosADM",
    component: ControleUsuariosADMComponent
  },
  {
    path : "ControleAdministradoresADM",
    component: ControleAdministradoresADMComponent
  },
  {
    path: "FormCliFornec",
    component: FormCliFornecComponent
  },
  {
    path: "UsuarioImgs",
    component: UsuarioImgsComponent
  },
  {
    path: "UsuarioimgPerfil",
    component: UsuarioimgPerfilComponent
  },
  {
    path: "ConstructorADM",
    component: ConstructorADMComponent
  },
  {
    path : "PerfilUsuario",
    component: PerfilUsuarioComponent
  },
  {
    path: "CliFornecCrud",
    component: CliFornecCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
