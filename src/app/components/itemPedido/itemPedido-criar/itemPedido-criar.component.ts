import { ItemPedido } from '../itemPedido.model';
import { ItemPedidoService } from '../itemPedido.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemPedido-criar',
  templateUrl: './itemPedido-criar.component.html',
  styleUrls: ['./itemPedido-criar.component.scss']
})
export class ItemPedidoCreateComponent implements OnInit {

  itemPedido: ItemPedido = {
    pedido: null!,
    produto: null!,
    quantidade: 0
  }

  constructor(private itemPedidoService: ItemPedidoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createItemPedido(): void {
    this.itemPedidoService.create(this.itemPedido).subscribe(() => {
      this.itemPedidoService.ShowOMessage('itemPedido criado!')
      this.router.navigate(['/itemPedido'])

    })
  }

  cancel(): void {
    this.router.navigate(['/itemPedido'])
  }
}