import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  Usuarios: Usuario[] = [];


  constructor(
    public servUsuario: ServUsuario,
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    public routaPadrao : Router
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.showSpinner();
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      const filterId = params['filterId'];
      this.filterDivs(filterId || 'all');
    });

    
  }

AbrirDetalhesUsuario(id: string): void {
  localStorage.setItem('idUsuario', id);
  this.routaPadrao.navigate(['perfil']);
}

  getUsuarios() {
    this.servUsuario.getUsuarios().subscribe((data: Usuario[]) => {
      this.Usuarios = data;
    });
  }

  filterDivs(id: string): void {
    const divs = this.elementRef.nativeElement.querySelectorAll('.col-md-4');
    for (let i = 0; i < divs.length; i++) {
      const div = divs[i] as HTMLElement;
      if (id === 'all' || div.id === id) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    }
  }

  sortDivsByName(order: 'asc' | 'desc'): void {
    const divs = Array.from(this.elementRef.nativeElement.querySelectorAll('.col-md-4'));

    const filterButtons = Array.from(this.elementRef.nativeElement.querySelectorAll('.btn-filter'));
    filterButtons.forEach((button: any) => {
      button.remove();
    });

    divs.sort((a: any, b: any) => {
      const nameA = a.querySelector('.card-title').textContent.trim().toLowerCase();
      const nameB = b.querySelector('.card-title').textContent.trim().toLowerCase();

      if (order === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    const container = this.elementRef.nativeElement.querySelector('.container.my-5 .row.mt-4');
    divs.forEach((div: any) => {
      container.appendChild(div);
    });

    const filterButtonContainer = this.elementRef.nativeElement.querySelector('.btn-group[role="group"]');
    filterButtons.forEach((button: any) => {
      filterButtonContainer.appendChild(button);
    });
  }

  showSpinner(): void {
    Swal.fire({
      title: 'Carregando dados',
      html: '<div class="custom-spinner">Por favor aguarde</div>',
      allowOutsideClick: false,
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        // Cleanup code
      }
    });
  }
 
}