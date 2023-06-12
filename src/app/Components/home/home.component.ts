import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Usuario } from 'src/app/Shared/Model/Usuario';
import { ServUsuario } from 'src/app/Shared/Service/serv-usuario.service';
import Isotope from 'isotope-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  Usuarios: Usuario[] = [];

  constructor(public servUsuario: ServUsuario) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  ngAfterViewInit(): void {
    const grid = new Isotope('#card-container', {
      itemSelector: '.item',
      layoutMode: 'fitRows',
    });

    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        if (filterValue) {
          grid.arrange({ filter: filterValue });
        }
      });
    });

    const sortButtons = document.querySelectorAll('.sort-button');
    sortButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const sortBy = button.getAttribute('data-sort-by');
        const sortAsc = button.getAttribute('data-sort-asc') === 'true';
        if (sortBy) {
          grid.arrange({ sortBy: sortBy, sortAscending: sortAsc });
        }
      });
    });
  }

  getUsuarios() {
    this.servUsuario.getUsuarios().subscribe((data) => {
      this.Usuarios = data;
    });
  }
}


document.addEventListener('DOMContentLoaded', (): void => {
  const carousel = document.querySelector('.carousel') as HTMLElement;
  const carouselInner = carousel.querySelector('.carousel-inner') as HTMLElement;
  const prevBtn = carousel.querySelector('.carousel-control.prev') as HTMLElement;
  const nextBtn = carousel.querySelector('.carousel-control.next') as HTMLElement;
  const itemWidth = carouselInner.offsetWidth / 3;
  let position = 0;

  prevBtn.addEventListener('click', (e): void => {
    e.preventDefault();
    position += itemWidth;
    if (position > 0) {
      position = -itemWidth * 2;
    }
    carouselInner.style.transform = `translateX(${position}px)`;
  });

  nextBtn.addEventListener('click', (e): void => {
    e.preventDefault();
    position -= itemWidth;
    if (position < -itemWidth * 2) {
      position = 0;
    }
    carouselInner.style.transform = `translateX(${position}px)`;
  });
});