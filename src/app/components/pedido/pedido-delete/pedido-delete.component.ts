import { pedidoService } from '../pedido.service';
import { pedido } from '../pedido.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
  styleUrls: ['./pedido-delete.component.scss']
})
export class pedidoDeleteComponent implements OnInit {

  pedido!: pedido;

  constructor(private pedidoService: pedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pedidoService.findById(id!).subscribe(pedido =>
      this.pedido = pedido
    )
  }

  deleteprodutoFornecedor(): void {
    this.pedidoService.delete(this.pedido.id!).subscribe(() => {
      this.pedidoService.ShowOMessage('pedido Excluido com sucesso')
      this.router.navigate(['/pedido'])
    })

  }

  cancel(): void {
    this.router.navigate(['/pedido'])
  }

}
