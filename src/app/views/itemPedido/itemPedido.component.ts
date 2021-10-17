import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-ItemPedido',
  templateUrl: './ItemPedido.component.html',
  styleUrls: ['./ItemPedido.component.scss']
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

  navigateToClienteCreate(): void {
    this.router.navigate(['ItemPedido/create'])
  }
}
