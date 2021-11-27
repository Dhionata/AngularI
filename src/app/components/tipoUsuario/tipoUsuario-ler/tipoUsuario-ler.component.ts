import { TipoUsuarioService } from '../tipoUsuario.service';
import { TipoUsuario } from '../TipoUsuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TipoUsuario-ler',
  templateUrl: './TipoUsuario-ler.component.html',
  styleUrls: ['./TipoUsuario-ler.component.scss']
})
export class TipoUsuarioLerComponent implements OnInit {

  TipoUsuarios!: TipoUsuario[]
  displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'actions']

  constructor(private TipoUsuarioService: TipoUsuarioService) { }

  ngOnInit(): void {
    this.TipoUsuarioService.read().subscribe(TipoUsuarios => {
      this.TipoUsuarios = TipoUsuarios
      console.log(TipoUsuarios);

    })
  }

}
