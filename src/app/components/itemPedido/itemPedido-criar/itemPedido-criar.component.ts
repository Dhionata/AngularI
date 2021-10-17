import { ItemPedido } from '../itemPedido.model';
import { ItemPedidoService } from '../itemPedido.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-itemPedido-criar',
  templateUrl: './itemPedido-criar.component.html',
  styleUrls: ['./itemPedido-criar.component.scss']
})
export class ItemPedidoCreateComponent implements OnInit {

  itemPedido: ItemPedido = {
    id: '',
    pedido: '',
    produto: '',
    quantidade: '' ,
    avaliacao: ''
  }

  constructor(private ItemPedidoService: ItemPedidoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  Createcliente(): void {
    this.ItemPedidoService.create(this.itemPedido).subscribe(() => {
      this.ItemPedidoService.ShowOMessage('itemPedido criado!')
      this.router.navigate(['/itemPedido'])

    })

  }
  cancel(): void {
    this.router.navigate(['/itemPedido'])
  }


}
