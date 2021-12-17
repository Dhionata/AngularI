import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';
import { ClienteService } from '../../cliente/cliente.service';
import { FornecedorService } from '../../fornecedor/fornecedor.service';

@Component({
  selector: 'app-usuario-criar',
  templateUrl: './usuario-criar.component.html',
  styleUrls: ['./usuario-criar.component.scss']
})
export class UsuarioCreateComponent implements OnInit {
  botaoHabilitado: boolean = false;

  usuario = new Usuario()

  constructor(private usuarioService: UsuarioService, private clienteService: ClienteService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  createUsuario(): void {
    this.usuario.tipoUsuario = TipoUsuario.CLIENTE;
    console.log(this.usuario)
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.ShowOMessage('usuario criado!')
      this.router.navigate(['/usuario'])
    })
    this.botaoHabilitado = false;
  }
  cancel(): void {
    this.router.navigate(['/usuario'])
  }

  desabilitar(): void {
    console.log("tá entrando no desabilitar")
    if (this.usuario.nome == '' || this.usuario.email == '' || this.usuario.senha == '' || this.usuario.cnpjCpf == '') {
      this.botaoHabilitado = false;
    }
    else {
      this.botaoHabilitado = true;
    }

  }

  mudou(): void {
    this.usuario.tipoUsuario = TipoUsuario.FORNECEDOR;
    this.router.navigate(['fornecedor/create'])
  }

}
