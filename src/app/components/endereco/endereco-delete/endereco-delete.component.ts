import { EnderecoService } from '../endereco.service';
import { Endereco } from '../endereco.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Endereco-delete',
  templateUrl: './Endereco-delete.component.html',
  styleUrls: ['./Endereco-delete.component.scss']
})
export class EnderecoDeleteComponent implements OnInit {

  Endereco!: Endereco;

  constructor(private EnderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.EnderecoService.findById(id!).subscribe(Endereco =>
      this.Endereco = Endereco
    )
  }

  deleteEndereco(): void {
    this.EnderecoService.delete(this.Endereco.id!).subscribe(() => {
      this.EnderecoService.ShowOMessage('Endereco Excluido com sucesso')
      this.router.navigate(['/Endereco'])
    })

  }

  cancel(): void {
    this.router.navigate(['/Endereco'])
  }

}
