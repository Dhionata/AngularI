import { TipoUsuarioService } from '../tipoUsuario.service';
import { TipoUsuario } from '../TipoUsuario.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-TipoUsuario-delete',
  templateUrl: './TipoUsuario-delete.component.html',
  styleUrls: ['./TipoUsuario-delete.component.scss']
})
export class TipoUsuarioDeleteComponent implements OnInit {

  TipoUsuario!: TipoUsuario;

  constructor(private TipoUsuarioService: TipoUsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TipoUsuarioService.findById(id!).subscribe(TipoUsuario =>
      this.TipoUsuario = TipoUsuario
    )
  }

  deleteTipoUsuario(): void {
    this.TipoUsuarioService.delete(this.TipoUsuario).subscribe(() => {
      this.TipoUsuarioService.ShowOMessage('TipoUsuario Excluido com sucesso')
      this.router.navigate(['/TipoUsuario'])
    })

  }

  cancel(): void {
    this.router.navigate(['/TipoUsuario'])
  }

}
