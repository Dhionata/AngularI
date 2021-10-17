import { FornecedorService } from '../fornecedor.service';
import { fornecedor } from '../fornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor-ler',
  templateUrl: './fornecedor-ler.component.html',
  styleUrls: ['./fornecedor-ler.component.scss']
})
export class FornecedorlerComponent implements OnInit {

  fornecedor!: fornecedor[]
  displayedColumns = ['id','descricao','endereco']

  constructor(private FornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.FornecedorService.read().subscribe(fornecedores => {
      this.fornecedor = fornecedores
      console.log(fornecedores);

    })
  }

}
