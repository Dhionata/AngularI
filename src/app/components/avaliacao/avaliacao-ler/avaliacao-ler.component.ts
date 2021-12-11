import { AvaliacaoService } from '../avaliacao.service';
import { Avaliacao } from '../avaliacao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacao-ler',
  templateUrl: './avaliacao-ler.component.html',
  styleUrls: ['./avaliacao-ler.component.scss']
})
export class AvaliacaolerComponent implements OnInit {

  avaliacao!: Avaliacao[]
  displayedColumns = ['id', 'nota', 'comentario', 'action']

  constructor(private AvaliacaoService: AvaliacaoService) { }

  ngOnInit(): void {
    this.AvaliacaoService.read().subscribe(avaliacaoes => {
      this.avaliacao = avaliacaoes
      console.log(avaliacaoes);

    })
  }

}
