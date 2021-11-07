import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de usuários",
      icon: 'storefront',
      routerUrl: '/usuario'
    }
  }

  ngOnInit(): void {
  }

  navigateToUsuarioCreate(): void {
    this.router.navigate(['usuario/create'])
  }
}
