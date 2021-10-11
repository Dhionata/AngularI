import { TelefoneFornecedorService } from '../telefoneFornecedor.service';
import { TelefoneFornecedor } from '../telefoneFornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TelefoneFornecedor-ler',
  templateUrl: './TelefoneFornecedor-ler.component.html',
  styleUrls: ['./TelefoneFornecedor-ler.component.scss']
})
export class TelefoneFornecedorlerComponent implements OnInit {

  TelefoneFornecedors!: TelefoneFornecedor[]
  displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'actions']

  constructor(private TelefoneFornecedorService: TelefoneFornecedorService) { }

  ngOnInit(): void {
    this.TelefoneFornecedorService.read().subscribe(TelefoneFornecedors => {
      this.TelefoneFornecedors = TelefoneFornecedors
      console.log(TelefoneFornecedors);

    })
  }

}
