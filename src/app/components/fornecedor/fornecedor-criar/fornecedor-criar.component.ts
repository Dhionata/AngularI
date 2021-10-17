import { fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fornecedor-criar',
  templateUrl: './fornecedor-criar.component.html',
  styleUrls: ['./fornecedor-criar.component.scss']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: fornecedor = {
    descricao: '',
    endereco: '',
    id: 0
  }

  constructor(private FornecedorService: FornecedorService,
    private router: Router) { }

  ngOnInit(): void {

  }

  Createfornecedor(): void {
    this.FornecedorService.create(this.fornecedor).subscribe(() => {
      this.FornecedorService.ShowOMessage('fornecedor criado!')
      this.router.navigate(['/fornecedor'])

    })

  }
  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }


}
