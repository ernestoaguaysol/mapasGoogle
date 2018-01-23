import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = -34.605956;
  lng: number = -58.734702;
  zoom: number = 16;

  constructor(public _mapasService: MapasService) {

  }


  clickMapa(evento) {
    const nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };

    this._mapasService.insertarMarcador(nuevoMarcador);
    console.log(evento);
  }
}
