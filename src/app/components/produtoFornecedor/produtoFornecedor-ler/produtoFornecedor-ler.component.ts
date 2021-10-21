import { produtoFornecedorService } from '../produtoFornecedor.service';
import { produtoFornecedor } from '../produtoFornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtoFornecedor-ler',
  templateUrl: './produtoFornecedor-ler.component.html',
  styleUrls: ['./produtoFornecedor-ler.component.scss']
})
export class produtoFornecedorlerComponent implements OnInit {

  produtoFornecedor!: produtoFornecedor[]
  displayedColumns = ['id', 'preco' , 'action']

  constructor(private produtoFornecedorService: produtoFornecedorService) { }

  ngOnInit(): void {
    this.produtoFornecedorService.read().subscribe(produtoFornecedor => {
      this.produtoFornecedor = produtoFornecedor
      console.log(produtoFornecedor);

    })
  }

}
