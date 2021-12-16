import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from '../tipoUsuario/tipoUsuario.model';
import { Usuario } from '../usuario/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  usuario = new Usuario();

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  fazerLogin(usuario: Usuario) {
    var a = this.usuarioService.autenticaUsuario(usuario);
    if (a != null) {
      this.usuarioAutenticado = true;
      a.subscribe((usuario) => (this.usuario = usuario));
      this.mostrarMenuEmitter.emit(true);
      console.log(this.usuario);
      sessionStorage.setItem('usuarioAutenticado', usuario.tipoUsuario!.toString());
      console.log(sessionStorage.getItem('usuarioAutenticado'));
      this.router.navigate(['/usuario']);
    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
