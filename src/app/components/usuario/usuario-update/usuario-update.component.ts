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
    id: null!,
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.UsuarioService.findById(id!).subscribe(usuario =>
      this.usuario = usuario)

    console.log(this.usuario)
  }

  updateUsuario(): void {
    console.log(this.usuario)
    this.UsuarioService.update(this.usuario).subscribe(() => {
      this.UsuarioService.ShowOMessage('Usuario atualizado com sucesso')
      this.router.navigate(["/usuario"])
    })
    this.botaoHabilitado = false;
  }

  desabilitar(): void {
    console.log("tá entrando no desabilitar")
    if (this.usuario.nome == '' || this.usuario.email == '' || this.usuario.cnpjCpf == '') {
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
