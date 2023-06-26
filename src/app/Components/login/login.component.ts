import { Component } from '@angular/core';
import { ServLoginServiceService } from 'src/app/Shared/Service/serv-login-service.service';
import { Login } from 'src/app/Shared/Model/Login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: ServLoginServiceService) { }

  autenticarUsuario(username: string, password: string): void {
    this.loginService.authenticateUser(username, password).subscribe(
      (login: Login) => {
        // Autenticação bem-sucedida, redirecione para outra rota
        Swal.fire('Atenção!', 'chamar proximo component', 'success');
      },
      (error) => {
        alert('Usuário não existe!');
      }
    );
  }

}