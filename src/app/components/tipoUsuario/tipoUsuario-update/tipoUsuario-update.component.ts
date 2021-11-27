import { TipoUsuarioService } from '../tipoUsuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoUsuario } from '../TipoUsuario.model';

@Component({
  selector: 'app-TipoUsuario-update',
  templateUrl: './TipoUsuario-update.component.html',
  styleUrls: ['./TipoUsuario-update.component.scss']
})
export class TipoUsuarioUpdateComponent implements OnInit {

  TipoUsuario!: TipoUsuario;

  constructor(private TipoUsuarioService: TipoUsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TipoUsuarioService.findById(id!).subscribe(TipoUsuario =>
      this.TipoUsuario = TipoUsuario)
  }

  updateTipoUsuario(): void {
    this.TipoUsuarioService.update(this.TipoUsuario).subscribe(() => {
      this.TipoUsuarioService.ShowOMessage('TipoUsuario atualizado com sucesso')
      this.router.navigate(["/TipoUsuario"])
    })

  }

  cancel(): void {
    this.router.navigate(['/TipoUsuario'])
  }


}
