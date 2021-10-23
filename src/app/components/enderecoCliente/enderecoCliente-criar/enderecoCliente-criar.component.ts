import { enderecoCliente } from '../enderecoCliente.model';
import { EnderecoClienteService } from '../enderecoCliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enderecoCliente-criar',
  templateUrl: './enderecoCliente-criar.component.html',
  styleUrls: ['./enderecoCliente-criar.component.scss']
})
export class EnderecoClienteCreateComponent implements OnInit {

  enderecoCliente: enderecoCliente = {
    cliente: null!,
  }

  constructor(private EnderecoClienteService: EnderecoClienteService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateenderecoCliente(): void {
    this.EnderecoClienteService.create(this.enderecoCliente).subscribe(() => {
      this.EnderecoClienteService.ShowOMessage('enderecoCliente criado!')
      this.router.navigate(['/enderecoCliente'])

    })

  }
  cancel(): void {
    this.router.navigate(['/enderecoCliente'])
  }


}
