import { TipoUsuario } from '../TipoUsuario.model';
import { TipoUsuarioService } from '../tipoUsuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-TipoUsuario-criar',
  templateUrl: './TipoUsuario-criar.component.html',
  styleUrls: ['./TipoUsuario-criar.component.scss']
})
export class TipoUsuarioCreateComponent implements OnInit {

  TipoUsuario!: TipoUsuario;

  constructor(private TipoUsuarioService: TipoUsuarioService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateTipoUsuario(): void {
    this.TipoUsuarioService.create(this.TipoUsuario).subscribe(() => {
      this.TipoUsuarioService.ShowOMessage('TipoUsuario criado!')
      this.router.navigate(['/TipoUsuario'])

    })

  }
  cancel(): void {
    this.router.navigate(['/TipoUsuario'])
  }


}