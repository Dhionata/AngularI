import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.scss']
})
export class TelefoneComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de telefones",
      icon: 'storefront',
      routerUrl: '/telefone'
    }
  }

  ngOnInit(): void {
  }

  navigateToTelefoneCreate(): void {
    this.router.navigate(['telefone/create'])
  }
}
