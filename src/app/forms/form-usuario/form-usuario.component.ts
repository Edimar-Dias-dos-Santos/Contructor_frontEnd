import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExceptionDefault } from 'src/app/Shared/Messages/Exceptions';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  usuario!: Usuario;

  constructor(private servUsuario: ServUsuario, private router: Router) { }

  ngOnInit() {
    this.usuario = this.inicializarUsuario();
  }

  inicializarUsuario(): Usuario {
    return {
      idUsuario: '',
      permissao: true,
      nome: '',
      telefone: '',
      email: ''
    };
  }

  setUsuario() {
    if (this.usuario.nome && this.usuario.telefone && this.usuario.email) {
      this.servUsuario.setUsuario(this.usuario).subscribe(
        resposta => {
          console.log('Resposta do servidor:', resposta); // Verifique a resposta recebida do servidor
           
  
            this.usuario.idUsuario = resposta.idUsuario;
            this.servUsuario.setUsuarioAtual(this.usuario);
            this.router.navigateByUrl('/tipoCadastro');

        },
        error => console.error(error)
      );
    } else {
      Swal.fire('Atenção!', 'Por favor, preencha todos os campos do formulário.', 'error');
      throw new ExceptionDefault('Por favor, informe todos os campos');
    }
  }

}