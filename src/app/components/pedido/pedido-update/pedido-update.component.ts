import { PedidoService } from '../pedido.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../pedido.model';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
  styleUrls: ['./pedido-update.component.scss']
})
export class pedidoUpdateComponent implements OnInit {

  pedido!: Pedido;

  constructor(private PedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.PedidoService.findById(id!).subscribe(pedido =>
      this.pedido = pedido)
  }

  updatepedido(): void {
    this.PedidoService.update(this.pedido).subscribe(() => {
      this.PedidoService.ShowOMessage('pedido atualizado com sucesso')
      this.router.navigate(["/pedido"])
    })

  }

  cancel(): void {
    this.router.navigate(['/pedido'])
  }


}
