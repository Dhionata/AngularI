import { TipoUsuarioService } from '../tipoUsuario.service';
import { TipoUsuario } from '../tipoUsuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TipoUsuario-ler',
  templateUrl: './TipoUsuario-ler.component.html',
  styleUrls: ['./TipoUsuario-ler.component.scss']
})
export class TipoUsuarioLerComponent implements OnInit {

  tipoUsuarios!: TipoUsuario[]
  //displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'actions']

  constructor(private tipoUsuarioService: TipoUsuarioService) { }

  ngOnInit(): void {
    this.tipoUsuarioService.read().subscribe(tipoUsuarios => {
      this.tipoUsuarios = tipoUsuarios
      console.log(tipoUsuarios);

    })
  }

}
