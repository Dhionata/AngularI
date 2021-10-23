import { pedido } from '../pedido.model';
import { pedidoService } from '../pedido.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-criar',
  templateUrl: './pedido-criar.component.html',
  styleUrls: ['./pedido-criar.component.scss']
})
export class pedidoCreateComponent implements OnInit {

  pedido: pedido = {

  itensPedido: Array<itemPedido>,
  cliente: cliente,
  formaPagamento: FormaPagamento,
  desconto: null!,
  pago: null!,
  entregue: null!,
  data: null!
  }


  constructor(private pedidoService: pedidoService,
    private router: Router) { }


  ngOnInit(): void {


  }

  CreatePedido(): void {
    this.pedidoService.create(this.pedido).subscribe(() => {
      this.pedidoService.ShowOMessage('pedido criado!')
      this.router.navigate(['/pedido'])

    })

  }
  cancel(): void {
    this.router.navigate(['/pedido'])
  }


}

