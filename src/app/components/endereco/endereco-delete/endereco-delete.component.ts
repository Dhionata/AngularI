import { EnderecoService } from '../endereco.service';
import { Endereco } from '../endereco.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-endereco-delete',
  templateUrl: './endereco-delete.component.html',
  styleUrls: ['./endereco-delete.component.scss']
})
export class EnderecoDeleteComponent implements OnInit {

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
    this.enderecoService.findById(id!).subscribe(endereco =>
      this.endereco = endereco
    )
  }

  deleteEndereco(): void {
    this.enderecoService.delete(this.endereco).subscribe(() => {
      this.enderecoService.ShowOMessage('Endereco Excluido com sucesso')
      this.router.navigate(['/endereco'])
    })

  }

  cancel(): void {
    this.router.navigate(['/endereco'])
  }

}
