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
  }

}
