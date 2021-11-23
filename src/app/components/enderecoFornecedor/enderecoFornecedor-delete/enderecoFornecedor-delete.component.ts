import { EnderecoFornecedorService } from '../enderecoFornecedor.service';
import { EnderecoFornecedor } from '../enderecoFornecedor.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enderecoFornecedor-delete',
  templateUrl: './enderecoFornecedor-delete.component.html',
  styleUrls: ['./enderecoFornecedor-delete.component.scss']
})
export class EnderecoFornecedorDeleteComponent implements OnInit {

  enderecoFornecedor!: EnderecoFornecedor;

  constructor(private EnderecoFornecedorService: EnderecoFornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.EnderecoFornecedorService.findById(id!).subscribe(enderecoFornecedor =>
      this.enderecoFornecedor = enderecoFornecedor
    )
  }

  deleteEnderecoFornecedor(): void {
    this.EnderecoFornecedorService.delete(this.enderecoFornecedor).subscribe(() => {
      this.EnderecoFornecedorService.ShowOMessage('enderecoFornecedor Excluido com sucesso')
      this.router.navigate(['/enderecoFornecedor'])
    })

  }

  cancel(): void {
    this.router.navigate(['/enderecoFornecedor'])
  }

}
