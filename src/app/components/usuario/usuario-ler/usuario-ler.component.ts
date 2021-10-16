import { UsuarioService } from '../usuario.service';
import { usuario } from '../usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-ler',
  templateUrl: './usuario-ler.component.html',
  styleUrls: ['./usuario-ler.component.scss']
})
export class UsuarioCreateComponent implements OnInit {

  clientes!: usuario[]
  displayedColumns = ['id', 'nome', 'email', 'quantidade', 'actions']

  constructor(private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.UsuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios
      console.log(usuarios);

    })
  }

}
