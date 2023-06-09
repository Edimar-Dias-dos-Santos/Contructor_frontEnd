import { ServUsuario } from './../../Shared/Service/serv-usuario.service';
import { ServLoginServiceService } from './../../Shared/Service/serv-login-service.service';
import { Login } from './../../Shared/Model/Login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExceptionDefault } from 'src/app/Shared/Messages/Exceptions';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-criacao-login',
  templateUrl: './form-criacao-login.component.html',
  styleUrls: ['./form-criacao-login.component.scss']
})
export class FormCriacaoLoginComponent implements OnInit {

  login !: Login;
  confiracaoSenha !: string;

  constructor(
    private servLoginServiceService: ServLoginServiceService,
    private servUsuario: ServUsuario,
    private router: Router
  ) { }


  ngOnInit() {
    this.login = this.iniciarLogin();
  }

  iniciarLogin(): Login {
    return {
      idLogin: '',
      idUsuario: '',
      codigoLogado: '',
      password: '',
      username: this.servUsuario.usuarioAtual?.email || ''
    };
  }

  setLogin() {


    if (this.servUsuario.usuarioAtual) {
      this.login.username = this.servUsuario.usuarioAtual.email;
      this.login.idUsuario = this.servUsuario.usuarioAtual.idUsuario;
      this.login.codigoLogado = this.servUsuario.usuarioAtual.idUsuario;
    }

    if (!this.confiracaoSenha || !this.login.password) {

      Swal.fire('Atenção!', 'Todos os campos deveram ser preenchidos!', 'error');
      throw new ExceptionDefault('Por favor informe todos os campos');
    }

    if (this.confiracaoSenha != this.login.password) {

      Swal.fire('Erro!', 'As senhas precisam ser iguais!', 'error');
      throw new ExceptionDefault('As senhas precisam ser iguais');
    }

    this.servLoginServiceService.SetLogin(this.login).subscribe
      (
        novoLogin => {
          console.log('Login criado:', novoLogin);
          Swal.fire('Parabéns!', 'Login criado com sucesso', 'success');
          this.router.navigateByUrl('/MenuFinalCadastroComponent');
        },
        error => {
          Swal.fire('Obs!', 'Ocorreu um erro ao criar o login:', 'error');
        }
      );
  }

}
