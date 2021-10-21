import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-enderecoCliente',
  templateUrl: './enderecoCliente.component.html',
  styleUrls: ['./enderecoCliente.component.scss']
})
export class EnderecoClienteComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de enderecoClientes",
      icon: 'storefront',
      routerUrl: '/enderecoCliente'
    }
  }

  ngOnInit(): void {
  }

  navigateToEnderecoClienteCreate(): void {
    this.router.navigate(['enderecoCliente/create'])
  }
}
