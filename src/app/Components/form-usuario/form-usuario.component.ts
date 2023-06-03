import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuario!: Usuario;

  constructor(private servUsuario: ServUsuario) { }

  ngOnInit() {
    this.usuario = this.inicializarUsuario();
  }

  inicializarUsuario(): Usuario {
    return {
      id: 0,
      permissao: '',
      nome: '',
      telefone: '',
      email: '',
      situacao: false,
      senha: ''
    };
  }

  setUsuario() {
    this.servUsuario.setUsuario(this.usuario).subscribe(
      novoUsuario => {
        // Realize as ações necessárias, como redirecionar para a lista de usuários
      },
      error => console.error(error)
    );
  }

  updateUsuario() {
    this.servUsuario.updateUsuario(this.usuario).subscribe(
      usuarioAtualizado => {
        // Realize as ações necessárias, como redirecionar para a lista de usuários
      },
      error => console.error(error)
    );
  }

  deleteUsuario() {
    this.servUsuario.deleteUsuario(this.usuario.id).subscribe(
      () => {
        // Realize as ações necessárias, como redirecionar para a lista de usuários
      },
      error => console.error(error)
    );
  }
}