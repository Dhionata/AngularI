import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-ler',
  templateUrl: './pedido-ler.component.html',
  styleUrls: ['./pedido-ler.component.scss']
})
export class PedidoLerComponent implements OnInit {

  pedido!: Pedido[]
  preco!: number
  displayedColumns = ['id', 'cliente', 'action']

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.read().subscribe(pedido => {
      this.pedido = pedido
      console.log(pedido);
    })
  }

}