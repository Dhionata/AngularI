import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})
export class AvaliacaoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de avaliacaoes",
      icon: 'storefront',
      routerUrl: '/avaliacao'
    }
  }

  ngOnInit(): void {
  }

  navigateToAvaliacaoCreate(): void {
    this.router.navigate(['avaliacao/create'])
  }
}
