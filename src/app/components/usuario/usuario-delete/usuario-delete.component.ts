import { usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.scss']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario!: usuario;

  constructor(private UsuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.UsuarioService.findById(id!).subscribe(usuario =>
      this.usuario = usuario
    )
  }

  deletecliente(): void {
    this.UsuarioService.delete(this.usuario.id!).subscribe(() => {
      this.UsuarioService.ShowOMessage('usuario Excluido com sucesso')
      this.router.navigate(['/usuario'])
    })

  }

  cancel(): void {
    this.router.navigate(['/usuario'])
  }

}
