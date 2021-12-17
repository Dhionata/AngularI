import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor-ler',
  templateUrl: './fornecedor-ler.component.html',
  styleUrls: ['./fornecedor-ler.component.scss']
})
export class FornecedorlerComponent implements OnInit {

  fornecedor = new Array<Fornecedor>()
  
  displayedColumns = ['id', 'nome', 'descricao', 'cnpjCpf', /* 'listaProdutos', */ 'actions']

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedor = fornecedores
      console.log(fornecedores);

    })
  }

}
