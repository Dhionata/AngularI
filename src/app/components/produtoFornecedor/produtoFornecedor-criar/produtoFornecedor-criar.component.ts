import { produtoFornecedor } from '../produtoFornecedor.model';
import { produtoFornecedorService } from '../produtoFornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtoFornecedor-criar',
  templateUrl: './produtoFornecedor-criar.component.html',
  styleUrls: ['./produtoFornecedor-criar.component.scss']
})
export class produtoFornecedorCreateComponent implements OnInit {

  produtoFornecedor!: produtoFornecedor;

  constructor(private produtoFornecedorService: produtoFornecedorService,
    private router: Router) { }

  ngOnInit(): void {

    /* this.produtoFornecedor = {
     produto: '',
      preco: 0,
      quantidadeEmEstoque: 0,
      dataCadastro: ,
      dataAtualizacao: ,
      fornecedor: fornecedor
    } */
  }

  CreateprodutoFornecedor(): void {
    this.produtoFornecedorService.create(this.produtoFornecedor).subscribe(() => {
      this.produtoFornecedorService.ShowOMessage('produtoFornecedor criado!')
      this.router.navigate(['/produtoFornecedor'])

    })

  }
  cancel(): void {
    this.router.navigate(['/produtoFornecedor'])
  }


}
