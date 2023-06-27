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
         Swal.fire('Atenção!', 'Sou autenticarUsuarioAdm', 'success');
        this.router.navigateByUrl('/ConstructorADM');
        
       
        const responseCode = loginResponse.code;
     
      },
      (error) => {

        this.loginService.authenticateUser(username, password).subscribe(
          (login: Login) => {
            Swal.fire('Atenção!', 'Sou autenticarUsuario', 'success');
            this.router.navigateByUrl('/PerfilUsuario');
           
          },
          (error) => {
         
            alert('Eu não existo!');
          }
        );
      }
    );
  }
}