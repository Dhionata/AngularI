import { EnderecoService } from '../endereco.service';
import { Endereco } from '../endereco.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco-ler',
  templateUrl: './endereco-ler.component.html',
  styleUrls: ['./endereco-ler.component.scss']
})
export class EnderecolerComponent implements OnInit {

  Enderecos!: Endereco[]
  displayedColumns = ['id', 'logradouro', 'cidade', 'bairro',
   'complemento','cep','numero','coordenadaX','coordenadaY', 'actions']

  constructor(private EnderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.EnderecoService.read().subscribe(Enderecos => {
      this.Enderecos = Enderecos
      console.log(Enderecos);

    })
  }

}
