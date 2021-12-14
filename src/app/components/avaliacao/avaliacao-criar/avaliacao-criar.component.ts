import { Avaliacao } from '../avaliacao.model';
import { AvaliacaoService } from '../avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao-criar',
  templateUrl: './avaliacao-criar.component.html',
  styleUrls: ['./avaliacao-criar.component.scss']
})
export class AvaliacaoCreateComponent implements OnInit {

  avaliacao: Avaliacao = {
    nota: 0,
    comentario: '',
    data: new Date(),
    pedido: null!,
  }

  constructor(private avaliacaoService: AvaliacaoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createAvaliacao(): void {
    this.avaliacaoService.create(this.avaliacao).subscribe(() => {
      this.avaliacaoService.ShowOMessage('avaliacao criado!')
      this.router.navigate(['/avaliacao'])

    })

  }
  cancel(): void {
    this.router.navigate(['/avaliacao'])
  }

  mudou(): void {
    console.log(this.avaliacao)
    if (this.avaliacao.nota > 10) {
      this.avaliacao.nota = 0
      
    } else if (this.avaliacao.nota < 0) {
      this.avaliacao.nota = 0
    }
    console.log(this.avaliacao)
  }
}