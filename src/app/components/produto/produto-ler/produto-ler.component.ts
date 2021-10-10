import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-ler',
  templateUrl: './produto-ler.component.html',
  styleUrls: ['./produto-ler.component.scss']
})
export class ProdutolerComponent implements OnInit {

  produtos!: Produto[]
  displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'actions']

  constructor(private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
    this.ProdutoService.read().subscribe(produtos => {
      this.produtos = produtos
      console.log(produtos);

    })
  }

}
