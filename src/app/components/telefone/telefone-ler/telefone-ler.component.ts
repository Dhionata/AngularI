import { TelefoneService } from '../telefone.service';
import { Telefone } from '../telefone.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Telefone-ler',
  templateUrl: './Telefone-ler.component.html',
  styleUrls: ['./Telefone-ler.component.scss']
})
export class TelefonelerComponent implements OnInit {

  Telefones!: Telefone[]
  displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'actions']

  constructor(private TelefoneService: TelefoneService) { }

  ngOnInit(): void {
    this.TelefoneService.read().subscribe(Telefones => {
      this.Telefones = Telefones
      console.log(Telefones);

    })
  }

}
