import { FornecedorService } from '../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.scss']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor: Fornecedor = {
    descricao: '',
    listaProdutos: [],
    nome: '',
    email: '',
    senha: '',
    cnpjCpf: '',
    pedidos: [],
    enderecos: [],
    telefone: [],
    tipoUsuario: TipoUsuario.FORNECEDOR
  }

  constructor(private FornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.fornecedor)
    const id = this.route.snapshot.paramMap.get('id')
    this.FornecedorService.findById(id!).subscribe(fornecedor =>
      this.fornecedor = fornecedor)
  }

  updateFornecedor(): void {
    this.FornecedorService.update(this.fornecedor).subscribe(() => {
      this.FornecedorService.ShowOMessage('fornecedor atualizado com sucesso')
      this.router.navigate(["/fornecedor"])
    })

  }

  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }


}
