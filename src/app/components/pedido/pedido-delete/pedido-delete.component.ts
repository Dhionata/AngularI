import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
  styleUrls: ['./pedido-delete.component.scss']
})
export class PedidoDeleteComponent implements OnInit {

  pedido!: Pedido;

  constructor(private PedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.PedidoService.findById(id!).subscribe(pedido =>
      this.pedido = pedido
    )
  }

  deleteprodutoFornecedor(): void {
    this.PedidoService.delete(this.pedido).subscribe(() => {
      this.PedidoService.ShowOMessage('pedido Excluido com sucesso')
      this.router.navigate(['/pedido'])
    })

  }

  cancel(): void {
    this.router.navigate(['/pedido'])
  }

}
