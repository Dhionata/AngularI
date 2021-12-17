import { ItemPedidoService } from '../itemPedido.service';
import { ItemPedido } from '../itemPedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemPedido-ler',
  templateUrl: './itemPedido-ler.component.html',
  styleUrls: ['./itemPedido-ler.component.scss']
})
export class ItemPedidolerComponent implements OnInit {

  itensPedido = new Array<ItemPedido>()
  displayedColumns = ['id', /* 'pedido', */ 'produto', 'quantidade', 'actions']

  constructor(private ItemPedidoService: ItemPedidoService) { }

  ngOnInit(): void {
    this.ItemPedidoService.read().subscribe(itensPedido => {
      this.itensPedido = itensPedido
      console.log(itensPedido);
    })
  }

}
