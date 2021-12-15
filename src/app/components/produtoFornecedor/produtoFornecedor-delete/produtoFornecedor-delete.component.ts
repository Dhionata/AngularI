import { ProdutoFornecedorService } from '../produtoFornecedor.service';
import { ProdutoFornecedor } from '../produtoFornecedor.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtoFornecedor-delete',
  templateUrl: './produtoFornecedor-delete.component.html',
  styleUrls: ['./produtoFornecedor-delete.component.scss']
})
export class ProdutoFornecedorDeleteComponent implements OnInit {

  produtoFornecedor: ProdutoFornecedor = {
    produto: null!,
    fornecedor: null!,
    preco: 0,
    quantidadeEmEstoque: 0,
    dataCadastro: null!,
    dataAtualizacao: null!,
  }

  constructor(private produtoFornecedorService: ProdutoFornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoFornecedorService.findById(id!).subscribe(produtoFornecedor =>
      this.produtoFornecedor = produtoFornecedor
    )
  }

  deleteProdutoFornecedor(): void {
    this.produtoFornecedorService.delete(this.produtoFornecedor).subscribe(() => {
      this.produtoFornecedorService.ShowOMessage('produtoFornecedor Excluido com sucesso')
      this.router.navigate(['/produtoFornecedor'])
    })

  }

  cancel(): void {
    this.router.navigate(['/produtoFornecedor'])
  }

}
