import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { HeaderService } from 'src/app/Shared/Service/HeadersControl/header-service.service';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';

@Component({
  selector: 'app-usuarioimg-perfil',
  templateUrl: './usuarioimg-perfil.component.html',
  styleUrls: ['./usuarioimg-perfil.component.scss']
})
export class UsuarioimgPerfilComponent implements OnInit {
  usuarioAtual: Usuario | null = null;
  nomeEditado: string = '';
  telefoneEditado: string = '';

  constructor(
    private headerService: HeaderService,
    private servUsuario: ServUsuario
  ) { }

  ngOnInit(): void {
    this.obterUsuarioAtual();
  }

  obterUsuarioAtual(): void {
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
}