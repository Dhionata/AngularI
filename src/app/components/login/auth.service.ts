import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
    this.usuarioService.autenticaUsuario(usuario).subscribe(
      (usuario: Usuario) => {
        if (usuario != null) {
          this.usuario = usuario;
        } else {
          this.usuario = new Usuario();
        }
      }
    )
    if (this.usuario.email != null) {
      console.log("Entrou no if, o email n é nulo " + this.usuario.email);
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      sessionStorage.setItem('usuarioAutenticado', usuario.tipoUsuario!.toString());
      console.log(sessionStorage.getItem('usuarioAutenticado'));
      this.router.navigate(['/usuario']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      console.log("não existe email")
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
