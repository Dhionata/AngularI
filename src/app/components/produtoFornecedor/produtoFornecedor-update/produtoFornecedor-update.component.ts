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

  produtoFornecedor = new ProdutoFornecedor()

  constructor(private produtoFornecedorService: ProdutoFornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoFornecedorService.findById(id!).subscribe(produtoFornecedor =>
      this.produtoFornecedor = produtoFornecedor)
  }

  updateprodutoFornecedor(): void {
    this.produtoFornecedorService.update(this.produtoFornecedor).subscribe(() => {
      this.produtoFornecedorService.ShowOMessage('produtoFornecedor atualizado com sucesso')
      this.router.navigate(["/produtoFornecedor"])
    })

  }

  cancel(): void {
    this.router.navigate(['/produtoFornecedor'])
  }


}
