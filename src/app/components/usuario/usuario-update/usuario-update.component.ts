import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.scss']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario!: Usuario;

  constructor(private UsuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.UsuarioService.findById(id!).subscribe(usuario =>
      this.usuario = usuario)
  }

  updatecliente(): void {
    this.UsuarioService.update(this.usuario).subscribe(() => {
      this.UsuarioService.ShowOMessage('Usuario atualizado com sucesso')
      this.router.navigate(["/usuario"])
    })

  }

  cancel(): void {
    this.router.navigate(['/usuario'])
  }


}
