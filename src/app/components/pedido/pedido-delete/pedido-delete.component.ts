import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
  styleUrls: ['./pedido-delete.component.scss']
})
export class PedidoDeleteComponent implements OnInit {


  pedido = new Pedido()

  preco!: Observable<number>;

  constructor(private pedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pedidoService.findById(id!).subscribe(pedido =>
      this.pedido = pedido
    )
    this.preco = this.pedidoService.valorTotal(this.pedido.id!)
  }

  deletePedido(): void {
    this.pedidoService.delete(this.pedido).subscribe(() => {
      this.pedidoService.ShowOMessage('pedido excluido com sucesso')
      this.router.navigate(['/pedido'])
    })

  }

  cancel(): void {
    this.router.navigate(['/pedido'])
  }

}
