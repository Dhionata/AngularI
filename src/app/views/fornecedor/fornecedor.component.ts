import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Fornecedores",
      icon: 'storefront',
      routerUrl: '/fornecedor'
    }
  }

  ngOnInit(): void {
  }

  navigateToFornecedorCreate(): void {
    this.router.navigate(['fornecedor/create'])
  }
}
