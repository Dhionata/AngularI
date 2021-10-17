import { produtoFornecedorService } from '../produtoFornecedor.service';
import { produtoFornecedor } from '../produtoFornecedor.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtoFornecedor-delete',
  templateUrl: './produtoFornecedor-delete.component.html',
  styleUrls: ['./produtoFornecedor-delete.component.scss']
})
export class produtoFornecedorDeleteComponent implements OnInit {

  produtoFornecedor!: produtoFornecedor;

  constructor(private produtoFornecedorService: produtoFornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoFornecedorService.findById(id!).subscribe(produtoFornecedor =>
      this.produtoFornecedor = produtoFornecedor
    )
  }

  deleteprodutoFornecedor(): void {
    this.produtoFornecedorService.delete(this.produtoFornecedor.id!).subscribe(() => {
      this.produtoFornecedorService.ShowOMessage('produtoFornecedor Excluido com sucesso')
      this.router.navigate(['/produtoFornecedor'])
    })

  }

  cancel(): void {
    this.router.navigate(['/produtoFornecedor'])
  }

}
