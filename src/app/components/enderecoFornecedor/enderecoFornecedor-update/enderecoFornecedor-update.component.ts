import { EnderecoFornecedorService } from '../enderecoFornecedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoFornecedor } from '../enderecoFornecedor.model';

@Component({
  selector: 'app-enderecoFornecedor-update',
  templateUrl: './enderecoFornecedor-update.component.html',
  styleUrls: ['./enderecoFornecedor-update.component.scss']
})
export class EnderecoFornecedorUpdateComponent implements OnInit {

  enderecoFornecedor!: EnderecoFornecedor;

  constructor(private EnderecoFornecedorService: EnderecoFornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.EnderecoFornecedorService.findById(id!).subscribe(enderecoFornecedor =>
      this.enderecoFornecedor = enderecoFornecedor)
  }

  updateEnderecoFornecedor(): void {
    this.EnderecoFornecedorService.update(this.enderecoFornecedor).subscribe(() => {
      this.EnderecoFornecedorService.ShowOMessage('enderecoFornecedor atualizado com sucesso')
      this.router.navigate(["/enderecoFornecedor"])
    })

  }

  cancel(): void {
    this.router.navigate(['/enderecoFornecedor'])
  }


}
