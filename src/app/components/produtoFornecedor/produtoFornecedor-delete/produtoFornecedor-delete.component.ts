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

  produtoFornecedor = new ProdutoFornecedor()

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
      this.produtoFornecedorService.ShowOMessage('produtoFornecedor excluido com sucesso')
      this.router.navigate(['/produtoFornecedor'])
    })

  }

  cancel(): void {
    this.router.navigate(['/produtoFornecedor'])
  }

}
