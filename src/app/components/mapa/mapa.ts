import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.css']
})
export class MapaComponent {
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
}
