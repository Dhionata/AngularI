import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.css']
})
export class MapaComponent {
  texto : string = 'Chupa sociedade';
  lat: number = -16.8360435;
  lng: number = -49.2509255;
  zoom: number = 15;
}
