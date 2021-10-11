import { EnderecoService } from '../endereco.service';
import { Endereco } from '../endereco.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Endereco-ler',
  templateUrl: './Endereco-ler.component.html',
  styleUrls: ['./Endereco-ler.component.scss']
})
export class EnderecolerComponent implements OnInit {

  Enderecos!: Endereco[]
  displayedColumns = ['id', 'nome', 'preco', 'quantidade', 'actions']

  constructor(private EnderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.EnderecoService.read().subscribe(Enderecos => {
      this.Enderecos = Enderecos
      console.log(Enderecos);

    })
  }

}
