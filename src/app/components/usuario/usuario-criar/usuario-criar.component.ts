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

  usuario: Usuario = {
    nome: '',
    email: '',
    senha: '',
    cnpjCpf: '',
  }

  constructor(private UsuarioService: UsuarioService,
    private router: Router) {

  }

  ngOnInit(): void {

  }

  createUsuario(): void {
    this.UsuarioService.create(this.usuario).subscribe(() => {
      this.UsuarioService.ShowOMessage('usuario criado!')
      this.router.navigate(['/usuario'])

    })

  }
  cancel(): void {
    this.router.navigate(['/usuario'])
  }


}