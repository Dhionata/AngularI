import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.css']
})
export class MapaComponent {
  texto: string = 'Mapa';
  lat: number = 0;
  lng: number = 0;
  zoom: number = 5;
}
