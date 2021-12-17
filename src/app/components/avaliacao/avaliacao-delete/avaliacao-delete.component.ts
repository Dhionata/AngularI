import { Avaliacao } from '../avaliacao.model';
import { AvaliacaoService } from '../avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avaliacao-delete',
  templateUrl: './avaliacao-delete.component.html',
  styleUrls: ['./avaliacao-delete.component.scss']
})
export class AvaliacaoDeleteComponent implements OnInit {

  avaliacao = new Avaliacao()

  constructor(private avaliacaoService: AvaliacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.avaliacaoService.findById(id!).subscribe(avaliacao =>
      this.avaliacao = avaliacao
    )
  }

  deleteAvaliacao(): void {
    this.avaliacaoService.delete(this.avaliacao).subscribe(() => {
      this.avaliacaoService.ShowOMessage('avaliacao excluido com sucesso')
      this.router.navigate(['/avaliacao'])
    })

  }

  cancel(): void {
    this.router.navigate(['/avaliacao'])
  }

}
