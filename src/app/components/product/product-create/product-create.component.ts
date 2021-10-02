import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name:'',
    price: null!,
    quant: null!
  }

  constructor(private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.ShowOMessage('Produto criado!')
      this.router.navigate(['/product'])

    })

  }
  cancel(): void {
    this.router.navigate(['/product'])
  }


}
