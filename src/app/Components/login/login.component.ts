import { Component } from '@angular/core';
import { ServLoginServiceService } from 'src/app/Shared/Service/serv-login-service.service';
import { Login } from 'src/app/Shared/Model/Login';
import Swal from 'sweetalert2';
import { ServLoginConstructoAdmService } from 'src/app/Shared/Service/serv-login-constructo-adm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: ServLoginServiceService, private loginAdmService: ServLoginConstructoAdmService, private router: Router) { }

  autenticarUsuario(username: string, password: string): void {
    this.loginAdmService.authenticateUser(username, password).subscribe(
      (loginResponse: any) => {
        // Autenticação bem-sucedida como autenticarUsuarioAdm
        Swal.fire('Atenção!', 'Sou autenticarUsuarioAdm', 'success');
        // Salvar o código de resposta em uma variável, se necessário
        const responseCode = loginResponse.code;
        // Realizar as ações específicas para autenticarUsuarioAdm
        // ...
      },
      (error) => {
        // Não autenticado como autenticarUsuarioAdm, tentar autenticar como autenticarUsuario
        this.loginService.authenticateUser(username, password).subscribe(
          (login: Login) => {
            // Autenticação bem-sucedida como autenticarUsuario
            Swal.fire('Atenção!', 'Sou autenticarUsuario', 'success');
            // Realizar as ações específicas para autenticarUsuario
            // ...
          },
          (error) => {
            // Não autenticado como autenticarUsuario
            alert('Eu não existo!');
          }
        );
      }
    );
  }
}