import { TelefoneFornecedorService } from '../telefoneFornecedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefoneFornecedor } from '../telefoneFornecedor.model';

@Component({
  selector: 'app-TelefoneFornecedor-update',
  templateUrl: './TelefoneFornecedor-update.component.html',
  styleUrls: ['./TelefoneFornecedor-update.component.scss']
})
export class TelefoneFornecedorUpdateComponent implements OnInit {

  TelefoneFornecedor!: TelefoneFornecedor;

  constructor(private TelefoneFornecedorService: TelefoneFornecedorService,
     private router: Router,
     private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TelefoneFornecedorService.findById(id!).subscribe(TelefoneFornecedor =>
      this.TelefoneFornecedor = TelefoneFornecedor)
  }

    updateTelefoneFornecedor(): void{
      this.TelefoneFornecedorService.update(this.TelefoneFornecedor).subscribe(() => {
      this.TelefoneFornecedorService.ShowOMessage('TelefoneFornecedor atualizado com sucesso')
      this.router.navigate(["/TelefoneFornecedor"])
    })

    }

    cancel(): void {
      this.router.navigate(['/TelefoneFornecedor'])
    }


}
