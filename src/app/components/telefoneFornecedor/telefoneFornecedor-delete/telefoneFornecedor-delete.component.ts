import { TelefoneFornecedorService } from '../telefoneFornecedor.service';
import { TelefoneFornecedor } from '../telefoneFornecedor.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-TelefoneFornecedor-delete',
  templateUrl: './TelefoneFornecedor-delete.component.html',
  styleUrls: ['./TelefoneFornecedor-delete.component.scss']
})
export class TelefoneFornecedorDeleteComponent implements OnInit {

  TelefoneFornecedor!: TelefoneFornecedor;

  constructor(private TelefoneFornecedorService: TelefoneFornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TelefoneFornecedorService.findById(id!).subscribe(TelefoneFornecedor =>
      this.TelefoneFornecedor = TelefoneFornecedor
    )
  }

  deleteTelefoneFornecedor(): void {
    this.TelefoneFornecedorService.delete(this.TelefoneFornecedor.id!).subscribe(() => {
      this.TelefoneFornecedorService.ShowOMessage('TelefoneFornecedor Excluido com sucesso')
      this.router.navigate(['/TelefoneFornecedor'])
    })

  }

  cancel(): void {
    this.router.navigate(['/TelefoneFornecedor'])
  }

}
