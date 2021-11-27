import { TipoUsuarioService } from '../tipoUsuario.service';
import { TipoUsuario } from '../tipoUsuario.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-TipoUsuario-delete',
  templateUrl: './TipoUsuario-delete.component.html',
  styleUrls: ['./TipoUsuario-delete.component.scss']
})
export class TipoUsuarioDeleteComponent implements OnInit {

  tipoUsuario: TipoUsuario = TipoUsuario.CLIENTE;

  constructor(private TipoUsuarioService: TipoUsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TipoUsuarioService.findById(id!).subscribe(TipoUsuario =>
      this.tipoUsuario = TipoUsuario
    )
  }

  deleteTipoUsuario(): void {
    this.TipoUsuarioService.delete(this.tipoUsuario).subscribe(() => {
      this.TipoUsuarioService.ShowOMessage('TipoUsuario Excluido com sucesso')
      this.router.navigate(['/TipoUsuario'])
    })

  }

  cancel(): void {
    this.router.navigate(['/TipoUsuario'])
  }

}
