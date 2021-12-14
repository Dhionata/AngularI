import { AvaliacaoService } from '../avaliacao.service';
import { Avaliacao } from '../avaliacao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacao-ler',
  templateUrl: './avaliacao-ler.component.html',
  styleUrls: ['./avaliacao-ler.component.scss']
})
export class AvaliacaolerComponent implements OnInit {

  avaliacoes!: Avaliacao[]
  displayedColumns = ['id', 'nota', 'comentario', 'pedido', 'actions']

  constructor(private AvaliacaoService: AvaliacaoService) { }

  ngOnInit(): void {
    this.AvaliacaoService.read().subscribe(avaliacoes => {
      this.avaliacoes = avaliacoes
      console.log(avaliacoes);

    })
  }

}
