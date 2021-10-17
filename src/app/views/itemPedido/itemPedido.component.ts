import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-ItemPedido',
  templateUrl: './itemPedido.component.html',
  styleUrls: ['./itemPedido.component.scss']
})
export class ItemPedidoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de clientes",
      icon: 'storefront',
      routerUrl: '/ItemPedido'
    }
  }

  ngOnInit(): void {
  }

  navigateToItemPedidoCreate(): void {
    this.router.navigate(['ItemPedido/create'])
  }
}
