import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';

@Component({
  selector: 'app-usuario-criar',
  templateUrl: './usuario-criar.component.html',
  styleUrls: ['./usuario-criar.component.scss']
})
export class UsuarioCreateComponent implements OnInit {
  botaoHabilitado: boolean = false;

  usuario: Usuario = {
    nome: '', email: '', senha: '', cnpjCpf: '',
    tipoUsuario: TipoUsuario.CLIENTE,
    enderecos: [],
    telefone: [],
    pedidos: []
  }
  constructor(private UsuarioService: UsuarioService,
    private router: Router) {
  }
  ngOnInit(): void {
  }
  CreateUsuario(): void {
    this.UsuarioService.create(this.usuario).subscribe(() => {
      this.UsuarioService.ShowOMessage('usuario criado!')
      this.router.navigate(['/usuario'])
    })
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


}
