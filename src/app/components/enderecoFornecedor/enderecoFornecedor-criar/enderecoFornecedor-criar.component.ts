import { enderecoFornecedor } from '../enderecoFornecedor.model';
import { EnderecoFornecedorService } from '../enderecoFornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from '../../fornecedor/fornecedor.model';

@Component({
  selector: 'app-enderecoFornecedor-criar',
  templateUrl: './enderecoFornecedor-criar.component.html',
  styleUrls: ['./enderecoFornecedor-criar.component.scss'],
})
export class EnderecoFornecedorCriarComponent implements OnInit {
  enderecoFornecedor: enderecoFornecedor = {
    id: 0,
    fornecedor: Fornecedor,
  };

  constructor(
    private EnderecoFornecedorService: EnderecoFornecedorService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  CreateEnderecoFornecedor(): void {
    this.EnderecoFornecedorService.create(this.enderecoFornecedor).subscribe(
      () => {
        this.EnderecoFornecedorService.ShowOMessage('enderecoFornecedor criado!');
        this.router.navigate(['/enderecoFornecedor']);
      }
    );
  }
  cancel(): void {
    this.router.navigate(['/enderecoFornecedor']);
  }
}
