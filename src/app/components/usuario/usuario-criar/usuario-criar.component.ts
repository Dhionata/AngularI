import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-criar',
  templateUrl: './usuario-criar.component.html',
  styleUrls: ['./usuario-criar.component.scss']
})
export class UsuarioCreateComponent implements OnInit {

  Usuario: Usuario = {
    nome: '',
    email: null!,
    cnpjCpf: null!,
    senha: null!,
  }

  constructor(private UsuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateUsuario(): void {
    this.UsuarioService.create(this.Usuario).subscribe(() => {
      this.UsuarioService.ShowOMessage('usuario criado!')
      this.router.navigate(['/usuario'])

    })

  }
  cancel(): void {
    this.router.navigate(['/usuario'])
  }


}
