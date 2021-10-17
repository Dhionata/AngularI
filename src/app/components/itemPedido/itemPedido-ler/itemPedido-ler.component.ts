import { ItemPedidoService } from '../itemPedido.service';
import { itemPedido } from '../itemPedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemPedido-ler',
  templateUrl: './itemPedido-ler.component.html',
  styleUrls: ['./itemPedido-ler.component.scss']
})
export class ItemPedidolerComponent implements OnInit {

  itemPedidos!: itemPedido[]
  displayedColumns = ['id','cnpjCpf','email','nome','senha','actions']

  constructor(private ItemPedidoService: ItemPedidoService) { }

  ngOnInit(): void {
    this.ItemPedidoService.read().subscribe(itemPedidos => {
      this.itemPedidos = itemPedidos
      console.log(itemPedidos);

    })
  }

}
