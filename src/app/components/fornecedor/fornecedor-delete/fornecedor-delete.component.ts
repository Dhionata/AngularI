import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.scss']
})
export class FornecedorDeleteComponent implements OnInit {

  fornecedor!: Fornecedor;

  constructor(private FornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.FornecedorService.findById(id!).subscribe(fornecedor =>
      this.fornecedor = fornecedor
    )
  }

  deleteFornecedor(): void {
    this.FornecedorService.delete(this.fornecedor).subscribe(() => {
      this.FornecedorService.ShowOMessage('fornecedor Excluido com sucesso')
      this.router.navigate(['/fornecedor'])
    })

  }

  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }

}
