import { ProdutoFornecedor } from '../produtoFornecedor.model';
import { ProdutoFornecedorService } from '../produtoFornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtoFornecedor-criar',
  templateUrl: './produtoFornecedor-criar.component.html',
  styleUrls: ['./produtoFornecedor-criar.component.scss']
})
export class ProdutoFornecedorCreateComponent implements OnInit {

  produtoFornecedor: ProdutoFornecedor = {
    produto: null!,
    fornecedor: null!,
    preco: 0,
    quantidadeEmEstoque: 0,
    dataCadastro: null!,
    dataAtualizacao: null!,
  }

  constructor(private ProdutoFornecedorService: ProdutoFornecedorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProdutoFornecedor(): void {
    this.ProdutoFornecedorService.create(this.produtoFornecedor).subscribe(() => {
      this.ProdutoFornecedorService.ShowOMessage('produtoFornecedor criado!')
      this.router.navigate(['/produtoFornecedor'])

    })

  }
  cancel(): void {
    this.router.navigate(['/produtoFornecedor'])
  }


}
