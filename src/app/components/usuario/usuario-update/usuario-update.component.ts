import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.scss']
})
export class UsuarioUpdateComponent implements OnInit {

  botaoHabilitado: boolean = false;

  usuario: Usuario = {
    senha: '',
    email: '',
    cnpjCpf: '',
    nome: '',
    tipoUsuario: TipoUsuario.CLIENTE,
    enderecos: [],
    telefone: []
  }

  constructor(private UsuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.UsuarioService.findById(id!).subscribe(usuario =>
      this.usuario = usuario)
  }

  updateUsuario(): void {
    this.UsuarioService.update(this.usuario).subscribe(() => {
      this.UsuarioService.ShowOMessage('Usuario atualizado com sucesso')
      this.router.navigate(["/usuario"])
    })

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

  cancel(): void {
    this.router.navigate(['/usuario'])
  }
}
