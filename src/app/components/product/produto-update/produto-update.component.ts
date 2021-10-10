import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.scss']
})
export class ProdutoUpdateComponent implements OnInit {

  produto!: Produto;

  constructor(private ProdutoService: ProdutoService,
     private router: Router,
     private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProdutoService.findById(id!).subscribe(produto =>
      this.produto = produto)
  }

    updateProduct(): void{
      this.ProdutoService.update(this.produto).subscribe(() => {
      this.ProdutoService.ShowOMessage('Produto atualizado com sucesso')
      this.router.navigate(["/product"])
    })

    }

    cancel(): void {
      this.router.navigate(['/product'])
    }


}
