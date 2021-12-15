import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from '../tipoUsuario/tipoUsuario.model';
import { Usuario } from '../usuario/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  usuario: Usuario = {
    nome: '',
    email: '',
    senha: '',
    cnpjCpf: '',
    pedidos: [],
    enderecos: [],
    telefone: [],
    tipoUsuario: TipoUsuario.VISITANTE
  }

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  fazerLogin(usuario: Usuario) {
    var a = this.usuarioService.autenticaUsuario(usuario)
    if (a != null) {
      this.usuarioAutenticado = true;
      a.subscribe(usuario =>
        this.usuario = usuario)

      console.log(this.usuario)
      sessionStorage.setItem('usuarioAutenticado', usuario.id!.toString());
      this.router.navigate(['/usuario']);
    }
  }
}
