import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-criar',
  templateUrl: './produto-criar.component.html',
  styleUrls: ['./produto-criar.component.scss']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {

    nome: '',
    //disponivel: true
  }

  constructor(private ProdutoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateProduto(): void {
    this.ProdutoService.create(this.produto).subscribe(() => {
      this.ProdutoService.ShowOMessage('Produto criado!')
      this.router.navigate(['/produto'])

    })

  }
  cancel(): void {
    this.router.navigate(['/produto'])
  }


}
