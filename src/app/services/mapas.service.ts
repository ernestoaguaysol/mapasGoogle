import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador';

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {
    let nuevoMarcador: Marcador = {
      lat: -34.605956,
      lng: -58.734702,
      titulo: 'casa',
      draggable: true,
    };

    this.marcadores.push(nuevoMarcador);
  }


  insertarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador(idx: number) {
    this.marcadores.splice(idx, 1);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse( localStorage.getItem('marcadores'));

    } else {
      this.marcadores = [];
    }
  }

}
