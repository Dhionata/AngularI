import { FornecedorService } from '../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.scss']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor!: fornecedor;

  constructor(private FornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
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
