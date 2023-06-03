import { Component, OnInit } from '@angular/core';
import { ServRecuperaLoginService } from 'src/app/Shared/Service/serv-recupera-login-service.service';
import { RecuperaLogin } from 'src/app/Shared/Model/RecuperaLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-modo-recuperar',
  templateUrl: './form-modo-recuperar.component.html',
  styleUrls: ['./form-modo-recuperar.component.css']
})
export class FormModoRecuperarComponent implements OnInit {

  recuperaLogin!: RecuperaLogin;

  constructor(private recuperaLoginService: ServRecuperaLoginService, private router: Router) { }

  ngOnInit() {
    this.recuperaLogin = this.inicializarRecuperaLogin();
  }

  inicializarRecuperaLogin(): RecuperaLogin {
    return {
      id: 0,
      idUsuario: 0,
      numeroDocumento: '',
      dataNascimento: new Date(),
      ultimoNome: ''
    };
  }

  setRecuperaLogin() {
    if (this.recuperaLogin.numeroDocumento && this.recuperaLogin.dataNascimento && this.recuperaLogin.ultimoNome) {
      this.recuperaLoginService.setRecuperaLogin(this.recuperaLogin).subscribe(
        novoRecuperaLogin => {
          // Manipule os dados do recuperaLogin criado conforme necessário
          console.log('RecuperaLogin criado:', novoRecuperaLogin);
        },
        error => {
          console.log('Ocorreu um erro ao criar o login:', error);
        }
      );
    }
    else {
      alert('Por favor, preencha todos os campos do formulário.');
    }
  }
}






