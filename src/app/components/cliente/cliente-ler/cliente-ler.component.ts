import { ClienteService } from '../cliente.service';
import { cliente } from '../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-ler',
  templateUrl: './cliente-ler.component.html',
  styleUrls: ['./cliente-ler.component.scss']
})
export class ClientelerComponent implements OnInit {

  clientes!: cliente[]
  displayedColumns = ['id', 'nome', 'email', 'quantidade', 'actions']

  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.ClienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes);

    })
  }

}
