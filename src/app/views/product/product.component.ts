import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de produtos",
      icon: 'storefront',
      routerUrl: '/product'
    }
  }

  ngOnInit(): void {
  }

    navigateToProductCreate(): void{
        this.router.navigate(['product/create'])
    }
}
