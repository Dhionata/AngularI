import { AvaliacaoService } from '../avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Avaliacao } from '../avaliacao.model';

@Component({
  selector: 'app-avaliacao-update',
  templateUrl: './avaliacao-update.component.html',
  styleUrls: ['./avaliacao-update.component.scss']
})
export class AvaliacaoUpdateComponent implements OnInit {

  avaliacao: Avaliacao = {
    nota: 0,
    comentario: '',
    data: new Date(),
    pedido: null!
  }

  constructor(private AvaliacaoService: AvaliacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.AvaliacaoService.findById(id!).subscribe(avaliacao =>
      this.avaliacao = avaliacao)
  }

  updateAvaliacao(): void {
    this.AvaliacaoService.update(this.avaliacao).subscribe(() => {
      this.AvaliacaoService.ShowOMessage('avaliacao atualizado com sucesso')
      this.router.navigate(["/avaliacao"])
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
