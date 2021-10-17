import { produtoFornecedorService } from '../produtoFornecedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produtoFornecedor } from '../produtoFornecedor.model';

@Component({
  selector: 'app-produtoFornecedor-update',
  templateUrl: './produtoFornecedor-update.component.html',
  styleUrls: ['./produtoFornecedor-update.component.scss']
})
export class produtoFornecedorUpdateComponent implements OnInit {

  produtoFornecedor!: produtoFornecedor;

  constructor(private produtoFornecedorService: produtoFornecedorService,
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
