import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';

@Component({
  selector: 'app-fornecedor-criar',
  templateUrl: './fornecedor-criar.component.html',
  styleUrls: ['./fornecedor-criar.component.scss']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    descricao: " ",
    enderecos: [],
    listaProdutos: [],
    nome: '',
    email: '',
    senha: '',
    cnpjCpf: '',
    pedidos: [],
    telefone: [],
    tipoUsuario: TipoUsuario.FORNECEDOR
  }

  ngOnInit(): void {
  }

  constructor(private fornecedorService: FornecedorService,
    private router: Router) { }


  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.ShowOMessage('fornecedor criado!')
      this.router.navigate(['/fornecedor'])

    })

  }
  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }
}
