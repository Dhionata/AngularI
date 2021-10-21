import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-enderecoFornecedor',
  templateUrl: './enderecoFornecedor.component.html',
  styleUrls: ['./enderecoFornecedor.component.scss']
})
export class EnderecoFornecedorComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de enderecoFornecedor",
      icon: 'storefront',
      routerUrl: '/enderecoFornecedor'
    }
  }

  ngOnInit(): void {
  }

  navigateToEnderecoFornecedorCreate(): void {
    this.router.navigate(['enderecoFornecedor/create'])
  }
}
