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

  avaliacao!: Avaliacao

  constructor(private AvaliacaoService: AvaliacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.AvaliacaoService.findById(id!).subscribe(avaliacao =>
      this.avaliacao = avaliacao
    )
  }

  deleteavaliacao(): void {
    this.AvaliacaoService.delete(this.avaliacao).subscribe(() => {
      this.AvaliacaoService.ShowOMessage('avaliacao Excluido com sucesso')
      this.router.navigate(['/avaliacao'])
    })

  }

  cancel(): void {
    this.router.navigate(['/avaliacao'])
  }

}
