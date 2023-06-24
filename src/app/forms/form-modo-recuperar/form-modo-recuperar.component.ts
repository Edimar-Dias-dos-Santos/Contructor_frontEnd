import { Component, OnInit } from '@angular/core';
import { ServRecuperaLoginService } from 'src/app/Shared/Service/serv-recupera-login-service.service';
import { RecuperaLogin } from 'src/app/Shared/Model/RecuperaLogin';
import { Router } from '@angular/router';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import Swal from 'sweetalert2';
import { ExceptionDefault } from 'src/app/Shared/Messages/Exceptions';

@Component({
  selector: 'app-form-modo-recuperar',
  templateUrl: './form-modo-recuperar.component.html',
  styleUrls: ['./form-modo-recuperar.component.scss']
})
export class FormModoRecuperarComponent implements OnInit {

  recuperaLogin!: RecuperaLogin;

  constructor(
    private recuperaLoginService: ServRecuperaLoginService,
    private servUsuario: ServUsuario,
    private router: Router
  ) { }

  ngOnInit() {
    this.recuperaLogin = this.inicializarRecuperaLogin();
  }

  inicializarRecuperaLogin(): RecuperaLogin {
    return {
      idRecuperaLogin: '',
      idUsuario: '',
      cpf: '',
      dataNascimento: new Date(),
      ultimoNome: ''
    };
  }

  setRecuperaLogin() {

    if (this.recuperaLogin.cpf && this.recuperaLogin.dataNascimento && this.recuperaLogin.ultimoNome) {
      if (this.servUsuario.usuarioAtual) {
        this.recuperaLogin.idUsuario = this.servUsuario.usuarioAtual.idUsuario;

        this.recuperaLoginService.setRecuperaLogin(this.recuperaLogin).subscribe(
          novoRecuperaLogin => {
            // Manipule os dados do recuperaLogin criado conforme necessário
            console.log('RecuperaLogin criado:', novoRecuperaLogin);
            this.router.navigateByUrl('/FormCriacaoLogin');
          },
          error => {
            Swal.fire('Atenção!', 'Ocorreu um erro ao criar o login:', 'error');
            throw new ExceptionDefault('Por favor informe todos os campos');
          }
        );
      } else {
        Swal.fire('Atenção!', 'Usuário atual não está definido.', 'error');
        throw new ExceptionDefault('Usuário atual não está definido.');
      }
    } else {
      Swal.fire('Atenção!', 'Por favor, preencha todos os campos do formulário.', 'error');
      throw new ExceptionDefault('Por favor, preencha todos os campos do formulário.');
    }
  }
}