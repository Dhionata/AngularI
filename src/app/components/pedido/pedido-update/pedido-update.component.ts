import { PedidoService } from '../pedido.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../pedido.model';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
  styleUrls: ['./pedido-update.component.scss']
})
export class PedidoUpdateComponent implements OnInit {

  pedido!: Pedido;
  preco: any;

  constructor(private pedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pedidoService.findById(id!).subscribe(pedido =>
      this.pedido = pedido)
    this.preco = this.pedidoService.valorTotal(this.pedido.id!)
  }

  updatePedido(): void {
    this.pedidoService.update(this.pedido).subscribe(() => {
      this.pedidoService.ShowOMessage('pedido atualizado com sucesso')
      this.router.navigate(["/pedido"])
    })

  }

  cancel(): void {
    this.router.navigate(['/pedido'])
  }


}
