import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-itemPedido',
  templateUrl: './itemPedido.component.html',
  styleUrls: ['./itemPedido.component.scss']
})
export class ItemPedidoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de itensPedido",
      icon: 'storefront',
      routerUrl: '/itemPedido'
    }
  }

  ngOnInit(): void {
  }

  navigateToItemPedidoCreate(): void {
    this.router.navigate(['itemPedido/create'])
  }
}
