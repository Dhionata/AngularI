import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-ler',
  templateUrl: './produto-ler.component.html',
  styleUrls: ['./produto-ler.component.scss']
})
export class ProdutolerComponent implements OnInit {

  produto = new Array<Produto>()
  displayedColumns = ['id', 'nome' /* 'listaFornecedores' */, 'disponivel', 'actions']

  constructor(private ProdutoService: ProdutoService) { }

  ngOnInit(): void {
    this.ProdutoService.read().subscribe(produto => {
      this.produto = produto
      console.log(produto)
    })
  }

}
