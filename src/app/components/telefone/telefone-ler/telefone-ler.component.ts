import { TelefoneService } from '../telefone.service';
import { Telefone } from '../telefone.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefone-ler',
  templateUrl: './telefone-ler.component.html',
  styleUrls: ['./telefone-ler.component.scss']
})
export class TelefoneLerComponent implements OnInit {

  telefones!: Telefone[]
  displayedColumns = ['id', 'numero', 'usuario', 'actions']

  constructor(private telefoneService: TelefoneService) { }

  ngOnInit(): void {
    this.telefoneService.read().subscribe(telefones => {
      this.telefones = telefones
      console.log(telefones);

    })
  }

}
