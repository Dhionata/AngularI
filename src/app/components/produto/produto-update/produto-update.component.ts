import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.scss']
})
export class ProdutoUpdateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    listaFornecedores: [],
    disponivel: false
  };

  displayedColumns = ['id', 'nome', 'listaFornecedores', 'disponivel']

  constructor(private ProdutoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProdutoService.findById(id!).subscribe(produto =>
      this.produto = produto)
    console.log(this.produto)
  }

  updateProduto(): void {
    console.log("Produto Enviado: " + this.produto)
    this.ProdutoService.update(this.produto).subscribe(() => {
      this.ProdutoService.ShowOMessage('Produto atualizado com sucesso')
      this.router.navigate(["/produto"])
    })

  }

  cancel(): void {
    this.router.navigate(['/produto'])
  }

}
