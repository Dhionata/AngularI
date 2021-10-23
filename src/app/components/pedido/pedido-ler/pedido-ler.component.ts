import { pedidoService } from '../pedido.service';
import { pedido } from '../pedido.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-ler',
  templateUrl: './pedido-ler.component.html',
  styleUrls: ['./pedido-ler.component.scss']
})
export class pedidoLerComponent implements OnInit {

  pedido!: pedido[]
  displayedColumns = ['id', 'preco' , 'action']

  constructor(private pedidoService: pedidoService) { }

  ngOnInit(): void {
    this.pedidoService.read().subscribe(pedido => {
      this.pedido = pedido
      console.log(pedido);

    })
  }

}
