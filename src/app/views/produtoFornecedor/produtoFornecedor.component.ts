import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-produtoFornecedor',
  templateUrl: './produtoFornecedor.component.html',
  styleUrls: ['./produtoFornecedor.component.scss']
})
export class ProdutoFornecedorComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de produtos Fornecedor",
      icon: 'storefront',
      routerUrl: '/produtoFornecedor'
    }
  }

  ngOnInit(): void {
  }

  navigateToProdutoFornecedorCreate(): void {
    this.router.navigate(['produtoFornecedor/create/'])
  }
}
