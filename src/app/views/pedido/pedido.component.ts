import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class pedidoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro pedidos",
      icon: 'storefront',
      routerUrl: '/pedido'
    }
  }

  ngOnInit(): void {
  }

  navigateToPedidoCreate(): void {
    this.router.navigate(['pedido/create/'])
  }
}
