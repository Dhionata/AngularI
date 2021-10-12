import { EnderecoService } from '../endereco.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../endereco.model';

@Component({
  selector: 'app-Endereco-update',
  templateUrl: './Endereco-update.component.html',
  styleUrls: ['./Endereco-update.component.scss']
})
export class EnderecoUpdateComponent implements OnInit {

  Endereco!: Endereco;

  constructor(private EnderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.EnderecoService.findById(id!).subscribe(Endereco =>
      this.Endereco = Endereco)
  }

  updateEndereco(): void {
    this.EnderecoService.update(this.Endereco).subscribe(() => {
      this.EnderecoService.ShowOMessage('Endereco atualizado com sucesso')
      this.router.navigate(["/Endereco"])
    })

  }

  cancel(): void {
    this.router.navigate(['/Endereco'])
  }


}
