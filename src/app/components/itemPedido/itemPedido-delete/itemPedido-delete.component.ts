import { itemPedido } from '../itemPedido.model';
import { ItemPedidoService } from '../itemPedido.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemPedido-delete',
  templateUrl: './itemPedido-delete.component.html',
  styleUrls: ['./itemPedido-delete.component.scss']
})
export class ItemPedidoDeleteComponent implements OnInit {

  itemPedido!: itemPedido;

  constructor(private ItemPedidoService: ItemPedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ItemPedidoService.findById(id!).subscribe(itemPedido =>
      this.itemPedido = itemPedido
    )
  }

  deleteitemPedido(): void {
    this.ItemPedidoService.delete(this.itemPedido.id!).subscribe(() => {
      this.ItemPedidoService.ShowOMessage('itemPedido Excluido com sucesso')
      this.router.navigate(['/itemPedido'])
    })

  }

  cancel(): void {
    this.router.navigate(['/itemPedido'])
  }

}