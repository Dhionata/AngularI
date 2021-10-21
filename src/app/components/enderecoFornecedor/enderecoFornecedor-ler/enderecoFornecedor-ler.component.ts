import { EnderecoFornecedorService } from '../enderecoFornecedor.service';
import { enderecoFornecedor } from '../enderecoFornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enderecoFornecedor-ler',
  templateUrl: './enderecoFornecedor-ler.component.html',
  styleUrls: ['./enderecoFornecedor-ler.component.scss']
})
export class EnderecoFornecedorlerComponent implements OnInit {

  enderecoFornecedor!: enderecoFornecedor[]
  displayedColumns = ['id', 'enderecoFornecedor', 'actions']

  constructor(private EnderecoFornecedorService: EnderecoFornecedorService) { }

  ngOnInit(): void {
    this.EnderecoFornecedorService.read().subscribe(enderecoFornecedor => {
      this.enderecoFornecedor = enderecoFornecedor
      console.log(enderecoFornecedor);

    })
  }

}