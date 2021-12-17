import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-ler',
  templateUrl: './cliente-ler.component.html',
  styleUrls: ['./cliente-ler.component.scss']
})
export class ClientelerComponent implements OnInit {

  clientes = new Array<Cliente>()
  displayedColumns = ['id', 'cnpjCpf', 'email', 'nome', 'actions']

  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.ClienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes);

    })
  }

}
