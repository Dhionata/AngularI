import { TelefoneClienteService } from '../telefoneCliente.service';
import { TelefoneCliente } from '../telefoneCliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TelefoneCliente-ler',
  templateUrl: './TelefoneCliente-ler.component.html',
  styleUrls: ['./TelefoneCliente-ler.component.scss']
})
export class TelefoneClientelerComponent implements OnInit {

  TelefoneClientes!: TelefoneCliente[]
  displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'actions']

  constructor(private TelefoneClienteService: TelefoneClienteService) { }

  ngOnInit(): void {
    this.TelefoneClienteService.read().subscribe(TelefoneClientes => {
      this.TelefoneClientes = TelefoneClientes
      console.log(TelefoneClientes);

    })
  }

}
