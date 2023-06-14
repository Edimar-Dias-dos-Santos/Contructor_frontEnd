import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  Usuarios: Usuario[] = [];

  constructor(public servUsuario: ServUsuario, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  ngAfterViewInit(): void {
    this.filterDivs('all');
  }

  getUsuarios() {
    this.servUsuario.getUsuarios().subscribe((data) => {
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

    // Salvar os botões de filtro e removê-los temporariamente
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

    // Restaurar os botões de filtro na posição original
    const filterButtonContainer = this.elementRef.nativeElement.querySelector('.btn-group[role="group"]');
    filterButtons.forEach((button: any) => {
      filterButtonContainer.appendChild(button);
    });
  }
}