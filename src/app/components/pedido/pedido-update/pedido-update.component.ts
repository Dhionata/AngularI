import { pedidoService } from '../pedido.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pedido } from '../pedido.model';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
  styleUrls: ['./pedido-update.component.scss']
})
export class pedidoUpdateComponent implements OnInit {

  pedido!: pedido;

  constructor(private pedidoService: pedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pedidoService.findById(id!).subscribe(pedido =>
      this.pedido = pedido)
  }

  updateprodutoFornecedor(): void {
    this.pedidoService.update(this.pedido).subscribe(() => {
      this.pedidoService.ShowOMessage('pedido atualizado com sucesso')
      this.router.navigate(["/pedido"])
    })

  }

  cancel(): void {
    this.router.navigate(['/pedido'])
  }


}
