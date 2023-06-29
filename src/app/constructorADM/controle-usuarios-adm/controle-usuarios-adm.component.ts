import { Component, OnInit } from '@angular/core';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import { Usuario } from 'src/app/Shared/Model/Usuario';

@Component({
  selector: 'app-controle-usuarios-adm',
  templateUrl: './controle-usuarios-adm.component.html',
  styleUrls: ['./controle-usuarios-adm.component.scss']
})
export class ControleUsuariosADMComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private servUsuario: ServUsuario) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.servUsuario.getUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.error('Erro ao obter os usuários:', error);
      }
    );
  }

  excluirUsuario(id: string) {
    this.servUsuario.deleteUsuario(id).subscribe(
      () => {
        console.log('Usuário excluído com sucesso');
        // Atualizar a lista de usuários após a exclusão, se necessário
        this.getUsuarios();
      },
      (error) => {
        console.error('Erro ao excluir o usuário:', error);
      }
    );
  }

  atualizarPermissao(usuario: Usuario, permissao: boolean) {
    usuario.permissao = permissao;
    this.servUsuario.updateUsuario(usuario).subscribe(
      (usuarioAtualizado: Usuario) => {
        console.log('Permissão do usuário atualizada:', usuarioAtualizado);
      },
      (error) => {
        console.error('Erro ao atualizar a permissão do usuário:', error);
      }
    );
  }
}