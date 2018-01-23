import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = -34.605956;
  lng: number = -58.734702;
  zoom: number = 16;


  clickMapa(evento) {
    console.log(evento);
  }
}
