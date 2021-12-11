import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.scss']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario = {
    senha: '',
    email: '',
    cnpjCpf: '',
    nome: '',
    tipoUsuario: TipoUsuario.CLIENTE,
    enderecos: [],
    telefone: [],
    pedidos: []
  }

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

  deleteUsuario(): void {
    this.UsuarioService.delete(this.usuario).subscribe(() => {
      this.UsuarioService.ShowOMessage('usuario Excluido com sucesso')
      this.router.navigate(['/usuario'])
    })

  }

  cancel(): void {
    this.router.navigate(['/usuario'])
  }

}
