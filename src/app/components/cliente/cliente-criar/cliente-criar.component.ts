import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';

@Component({
  selector: 'app-cliente-criar',
  templateUrl: './cliente-criar.component.html',
  styleUrls: ['./cliente-criar.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    email: null!,
    cnpjCpf: null!,
    senha: null!,
    pedidos: [],
    enderecos: [],
    telefone: [],
    tipoUsuario: TipoUsuario.CLIENTE
  }

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.ShowOMessage('cliente criado!')
      this.router.navigate(['/cliente'])

    })

  }
  cancel(): void {
    this.router.navigate(['/cliente'])
  }


}
