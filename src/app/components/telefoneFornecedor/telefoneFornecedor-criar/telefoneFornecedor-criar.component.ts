import { TelefoneFornecedor } from '../telefoneFornecedor.model';
import { TelefoneFornecedorService } from '../telefoneFornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-TelefoneFornecedor-criar',
  templateUrl: './TelefoneFornecedor-criar.component.html',
  styleUrls: ['./TelefoneFornecedor-criar.component.scss']
})
export class TelefoneFornecedorCreateComponent implements OnInit {

  telefoneFornecedor: TelefoneFornecedor = {
    numero: "",
    cliente: cliente,
  }

  constructor(private TelefoneFornecedorService: TelefoneFornecedorService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateTelefoneFornecedor(): void {
    this.TelefoneFornecedorService.create(this.telefoneFornecedor).subscribe(() => {
      this.TelefoneFornecedorService.ShowOMessage('TelefoneFornecedor criado!')
      this.router.navigate(['/TelefoneFornecedor'])

    })

  }
  cancel(): void {
    this.router.navigate(['/TelefoneFornecedor'])
  }


}
