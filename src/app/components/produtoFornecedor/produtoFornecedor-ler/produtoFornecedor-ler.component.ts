import { ProdutoFornecedorService } from '../produtoFornecedor.service';
import { ProdutoFornecedor } from '../produtoFornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtoFornecedor-ler',
  templateUrl: './produtoFornecedor-ler.component.html',
  styleUrls: ['./produtoFornecedor-ler.component.scss']
})
export class ProdutoFornecedorlerComponent implements OnInit {

  produtoFornecedor!: ProdutoFornecedor[]
  displayedColumns = ['id', 'produto', 'preco', 'fornecedor', 'quantidadeEmEstoque', 'dataCadastro', 'dataAtualizacao', 'actions']

  constructor(private produtoFornecedorService: ProdutoFornecedorService) { }

  ngOnInit(): void {
    this.produtoFornecedorService.read().subscribe(produtoFornecedor => {
      this.produtoFornecedor = produtoFornecedor
      console.log(produtoFornecedor);

    })
  }

}
