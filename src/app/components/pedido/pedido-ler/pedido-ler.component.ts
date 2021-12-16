import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-ler',
  templateUrl: './pedido-ler.component.html',
  styleUrls: ['./pedido-ler.component.scss']
})
export class PedidoLerComponent implements OnInit {

  pedidos!: Pedido[]
  displayedColumns = ['id', 'cliente', 'actions']

  constructor(private pedidoService: PedidoService) { }
  ngOnInit(): void {
    this.pedidoService.read().subscribe(pedidos => {
      this.pedidos = pedidos
      console.log(this.pedidos);
    })
  }

}