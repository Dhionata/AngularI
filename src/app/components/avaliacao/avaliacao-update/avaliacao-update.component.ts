import { AvaliacaoService } from '../avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { avaliacao } from '../avaliacao.model';

@Component({
  selector: 'app-avaliacao-update',
  templateUrl: './avaliacao-update.component.html',
  styleUrls: ['./avaliacao-update.component.scss']
})
export class AvaliacaoUpdateComponent implements OnInit {

  avaliacao!: avaliacao;

  constructor(private AvaliacaoService: AvaliacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.AvaliacaoService.findById(id!).subscribe(avaliacao =>
      this.avaliacao = avaliacao)
  }

  updateavaliacao(): void {
    this.AvaliacaoService.update(this.avaliacao).subscribe(() => {
      this.AvaliacaoService.ShowOMessage('avaliacao atualizado com sucesso')
      this.router.navigate(["/avaliacao"])
    })

  }

  cancel(): void {
    this.router.navigate(['/avaliacao'])
  }


}
