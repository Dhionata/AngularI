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

  produtoFornecedor!: ProdutoFornecedor;

  constructor(private ProdutoFornecedorService: ProdutoFornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProdutoFornecedorService.findById(id!).subscribe(produtoFornecedor =>
      this.produtoFornecedor = produtoFornecedor
    )
  }

  deleteProdutoFornecedor(): void {
    this.ProdutoFornecedorService.delete(this.produtoFornecedor).subscribe(() => {
      this.ProdutoFornecedorService.ShowOMessage('produtoFornecedor Excluido com sucesso')
      this.router.navigate(['/produtoFornecedor'])
    })

  }

  cancel(): void {
    this.router.navigate(['/produtoFornecedor'])
  }

}
