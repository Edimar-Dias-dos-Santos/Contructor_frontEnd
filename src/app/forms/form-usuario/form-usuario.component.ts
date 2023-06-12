import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExceptionDefault } from 'src/app/Shared/Messages/Exceptions';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuario!: Usuario;

  constructor(private servUsuario: ServUsuario, private router: Router) { }

  ngOnInit() {
    this.usuario = this.inicializarUsuario();
  }

  inicializarUsuario(): Usuario {
    return {
      id: 0,
      permissao: true,
      nome: '',
      telefone: '',
      email: ''
    };
  }

  setUsuario() {
    if (this.usuario.nome && this.usuario.telefone && this.usuario.email) {
      this.servUsuario.setUsuario(this.usuario).subscribe(
        novoUsuario => {
          this.servUsuario.setUsuarioAtual(novoUsuario); // Armazena o usuário atual no serviço
          this.router.navigateByUrl('/tipoCadastro');
        },
        error => console.error(error)
      );
    } else {
      Swal.fire('Atenção!','Por favor, preencha todos os campos do formulário.', 'error');
      throw new ExceptionDefault('Por favor informe todos os campos');
    }
  }

  updateUsuario() {
    if (this.usuario.nome && this.usuario.telefone && this.usuario.email) {
      this.servUsuario.updateUsuario(this.usuario).subscribe(
        usuarioAtualizado => {
          // Realize as ações necessárias, como redirecionar para a lista de usuários
        },
        error => console.error(error)
      );
    } else {
      console.log('Por favor, preencha todos os campos do formulário.');
    }
  }

  deleteUsuario() {
    if (this.usuario.id) {
      this.servUsuario.deleteUsuario(this.usuario.id).subscribe(
        () => {
          // Realize as ações necessárias, como redirecionar para a lista de usuários
        },
        error => console.error(error)
      );
    } else {
      console.log('Usuário não possui um ID válido.');
    }
  }
}