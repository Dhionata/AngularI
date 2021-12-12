import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    email: '',
    senha: '',
    cnpjCpf: '',
    pedidos: [],
    enderecos: [],
    telefone: [],
    tipoUsuario: TipoUsuario.CLIENTE
  };

  constructor(private ClienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ClienteService.findById(id!).subscribe(cliente =>
      this.cliente = cliente)
  }

  updateCliente(): void {
    this.ClienteService.update(this.cliente).subscribe(() => {
      this.ClienteService.ShowOMessage('Cliente atualizado com sucesso')
      this.router.navigate(["/cliente"])
    })

  }

  cancel(): void {
    this.router.navigate(['/cliente'])
  }


}
