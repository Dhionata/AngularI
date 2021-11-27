import { ProdutoFornecedorService } from '../produtoFornecedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoFornecedor } from '../produtoFornecedor.model';

@Component({
  selector: 'app-produtoFornecedor-update',
  templateUrl: './produtoFornecedor-update.component.html',
  styleUrls: ['./produtoFornecedor-update.component.scss']
})
export class ProdutoFornecedorUpdateComponent implements OnInit {

  produtoFornecedor!: ProdutoFornecedor;

  constructor(private ProdutoFornecedorService: ProdutoFornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProdutoFornecedorService.findById(id!).subscribe(produtoFornecedor =>
      this.produtoFornecedor = produtoFornecedor)
  }

  updateprodutoFornecedor(): void {
    this.ProdutoFornecedorService.update(this.produtoFornecedor).subscribe(() => {
      this.ProdutoFornecedorService.ShowOMessage('produtoFornecedor atualizado com sucesso')
      this.router.navigate(["/produtoFornecedor"])
    })

  }

  cancel(): void {
    this.router.navigate(['/produtoFornecedor'])
  }


}
