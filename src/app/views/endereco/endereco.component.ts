import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de enderecos",
      icon: 'storefront',
      routerUrl: '/endereco'
    }
  }

  ngOnInit(): void {
  }

  navigateToEnderecoCreate(): void {
    this.router.navigate(['endereco/create'])
  }
}
