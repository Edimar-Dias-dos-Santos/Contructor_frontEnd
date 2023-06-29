import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Shared/Service/HeadersControl/header-service.service';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import { Usuario } from 'src/app/Shared/Model/Usuario';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {
  usuarioAtual: Usuario | null = null;
  nomeEditado: string = '';
  telefoneEditado: string = '';

  constructor(
    private headerService: HeaderService,
    private servUsuario: ServUsuario
  ) { }

  ngOnInit(): void {
    this.headerService.setShowHeader(false);
    this.headerService.setShowHeaderAdm(false);
    this.headerService.setShowheaderPerfilComponentshow(true);

    this.obterUsuarioAtual();
  }

  obterUsuarioAtual(): void {
    debugger
    const idUsuarioAtual = localStorage.getItem('idUsuario');

    if (idUsuarioAtual) {
      this.servUsuario.getUsuario(idUsuarioAtual).subscribe(
        (usuario: Usuario) => {
          this.usuarioAtual = usuario;
          this.nomeEditado = usuario.nome;
          this.telefoneEditado = usuario.telefone;
        },
        (error: any) => {
          console.error('Ocorreu um erro ao obter o usuário atual:', error);
        }
      );
    }
  }

  atualizarUsuario(): void {
    if (this.usuarioAtual) {
      this.usuarioAtual.nome = this.nomeEditado;
      this.usuarioAtual.telefone = this.telefoneEditado;

      this.servUsuario.updateUsuario(this.usuarioAtual).subscribe(
        (usuarioAtualizado: Usuario) => {
          console.log('Usuário atualizado com sucesso:', usuarioAtualizado);
        },
        (error: any) => {
          console.error('Ocorreu um erro ao atualizar o usuário:', error);
        }
      );
    }
  }

  excluirUsuario(): void {
    if (this.usuarioAtual) {
      const idUsuarioAtual = this.usuarioAtual.idUsuario;

      this.servUsuario.deleteUsuario(idUsuarioAtual).subscribe(
        () => {
          console.log('Usuário excluído com sucesso');
          // Redirecione ou realize outras ações após a exclusão do usuário, se necessário.
        },
        (error: any) => {
          console.error('Ocorreu um erro ao excluir o usuário:', error);
        }
      );
    }
  }
}
