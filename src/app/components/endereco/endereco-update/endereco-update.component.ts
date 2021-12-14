import { EnderecoService } from '../endereco.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../endereco.model';

@Component({
  selector: 'app-endereco-update',
  templateUrl: './endereco-update.component.html',
  styleUrls: ['./endereco-update.component.scss']
})
export class EnderecoUpdateComponent implements OnInit {

  endereco: Endereco = {
    usuario: null!,
    logradouro: '',
    cidade: '',
    bairro: '',
    complemento: '',
    cep: '',
    numero: '',
    coordenadaX: 0,
    coordenadaY: 0
  };

  constructor(private enderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.enderecoService.findById(id!).subscribe(Endereco =>
      this.endereco = Endereco)
  }

  updateEndereco(): void {
    this.enderecoService.update(this.endereco).subscribe(() => {
      this.enderecoService.ShowOMessage('Endereco atualizado com sucesso')
      this.router.navigate(["/endereco"])
    })

  }

  cancel(): void {
    this.router.navigate(['/endereco'])
  }


}
