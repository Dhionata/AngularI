import { avaliacao } from '../avaliacao.model';
import { AvaliacaoService } from '../avaliacao.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-avaliacao-criar',
  templateUrl: './avaliacao-criar.component.html',
  styleUrls: ['./avaliacao-criar.component.scss']
})
export class AvaliacaoCreateComponent implements OnInit {

  avaliacao!: avaliacao;


  constructor(private AvaliacaoService: AvaliacaoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  Createavaliacao(): void {
    this.AvaliacaoService.create(this.avaliacao).subscribe(() => {
      this.AvaliacaoService.ShowOMessage('avaliacao criado!')
      this.router.navigate(['/avaliacao'])

    })

  }
  cancel(): void {
    this.router.navigate(['/avaliacao'])
  }


}
