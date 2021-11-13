import { UsuarioService } from '../usuario.service';
import { usuario } from '../usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-ler',
  templateUrl: './usuario-ler.component.html',
  styleUrls: ['./usuario-ler.component.scss']
})
export class UsuariolerComponent implements OnInit {

  usuario!: usuario[]
  displayedColumns = ['id','nome','action']

  constructor(private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.UsuarioService.read().subscribe(usuario => {
      this.usuario = usuario
      console.log(usuario);

    })
  }

}
