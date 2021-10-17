import {ItemPedidoService } from '../itemPedido.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { itemPedido } from '../itemPedido.model';

@Component({
  selector: 'app-itemPedido-update',
  templateUrl: './itemPedido-update.component.html',
  styleUrls: ['./itemPedido-update.component.scss']
})
export class ItemPedidoUpdateComponent implements OnInit {

  itemPedido!: itemPedido;

  constructor(private ItemPedidoService: ItemPedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ItemPedidoService.findById(id!).subscribe(itemPedido =>
      this.itemPedido = itemPedido)
  }

  updatecliente(): void {
    this.ItemPedidoService.update(this.itemPedido).subscribe(() => {
      this.ItemPedidoService.ShowOMessage('itemPedido atualizado com sucesso')
      this.router.navigate(["/itemPedido"])
    })

  }

  cancel(): void {
    this.router.navigate(['/itemPedido'])
  }


}
