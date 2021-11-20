import { EnderecoClienteService } from '../enderecoCliente.service';
import { EnderecoCliente } from '../enderecoCliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enderecoCliente-ler',
  templateUrl: './enderecoCliente-ler.component.html',
  styleUrls: ['./enderecoCliente-ler.component.scss']
})
export class EnderecoClientelerComponent implements OnInit {

  enderecoClientes!: EnderecoCliente[]
  displayedColumns = ['id', 'cliente', 'actions']

  constructor(private EnderecoClienteService: EnderecoClienteService) { }

  ngOnInit(): void {
    this.EnderecoClienteService.read().subscribe(enderecoClientes => {
      this.enderecoClientes = enderecoClientes
      console.log(enderecoClientes);

    })
  }

}
