import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routerUrl: '/products'
    }

  }
  ngOnInit(): void {
  }

}
export class MenuOverviewExample {}
export class GridListOverviewExample {}
