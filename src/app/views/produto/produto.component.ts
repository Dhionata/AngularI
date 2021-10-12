import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de produtos",
      icon: 'storefront',
      routerUrl: '/produto'
    }
  }

  ngOnInit(): void {
  }

  navigateToProdutoCreate(): void {
    this.router.navigate(['produto/create'])
  }
}
