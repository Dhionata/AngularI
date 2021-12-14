import { EnderecoService } from '../endereco.service';
import { Endereco } from '../endereco.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco-ler',
  templateUrl: './endereco-ler.component.html',
  styleUrls: ['./endereco-ler.component.scss']
})
export class EnderecolerComponent implements OnInit {

  enderecos!: Endereco[]
  displayedColumns = ['id', 'logradouro', 'cidade', 'bairro',
    'complemento', 'cep', 'numero', 'coordenadaX', 'coordenadaY', 'actions']

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.enderecoService.read().subscribe(enderecos => {
      this.enderecos = enderecos
      console.log(enderecos);

    })
  }

}
