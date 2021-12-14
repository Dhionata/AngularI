import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-endereco-criar',
  templateUrl: './endereco-criar.component.html',
  styleUrls: ['./endereco-criar.component.scss']
})
export class EnderecoCreateComponent implements OnInit {

  endereco: Endereco = {
    id: 0,
    logradouro: "",
    cidade: "",
    bairro: "",
    complemento: "",
    cep: "",
    numero: "",
    coordenadaX: 0,
    coordenadaY: 0,
    usuario: null!
  }

  constructor(private EnderecoService: EnderecoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createEndereco(): void {
    console.log(this.endereco)
    this.EnderecoService.create(this.endereco).subscribe(() => {
      this.EnderecoService.ShowOMessage('Endereco criado!')
      this.router.navigate(['/endereco'])

    })

  }
  cancel(): void {
    this.router.navigate(['/endereco'])
  }


}
