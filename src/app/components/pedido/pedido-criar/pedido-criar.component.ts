import { Pedido } from '../pedido.model';
import { PedidoService } from '../pedido.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-criar',
  templateUrl: './pedido-criar.component.html',
  styleUrls: ['./pedido-criar.component.scss']
})
export class PedidoCreateComponent implements OnInit {

  pedido: Pedido = {

  itensPedido: [],
  cliente: null!,
  formaPagamento: null!,
  desconto: null!,
  pago: null!,
  entregue: null!,
  data: null!
  }


  constructor(private PedidoService: PedidoService,
    private router: Router) { }


  ngOnInit(): void {


  }

  CreatePedido(): void {
    this.PedidoService.create(this.pedido).subscribe(() => {
      this.PedidoService.ShowOMessage('pedido criado!')
      this.router.navigate(['/pedido'])

    })

  }
  cancel(): void {
    this.router.navigate(['/pedido'])
  }


}

