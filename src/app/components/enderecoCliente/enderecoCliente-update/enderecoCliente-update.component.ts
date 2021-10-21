import { EnderecoClienteService } from '../enderecoCliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { enderecoCliente } from '../enderecoCliente.model';

@Component({
  selector: 'app-enderecoCliente-update',
  templateUrl: './enderecoCliente-update.component.html',
  styleUrls: ['./enderecoCliente-update.component.scss']
})
export class EnderecoClienteUpdateComponent implements OnInit {

  enderecoCliente!: enderecoCliente;

  constructor(private EnderecoClienteService: EnderecoClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.EnderecoClienteService.findById(id!).subscribe(enderecoCliente =>
      this.enderecoCliente = enderecoCliente)
  }

  updateenderecoCliente(): void {
    this.EnderecoClienteService.update(this.enderecoCliente).subscribe(() => {
      this.EnderecoClienteService.ShowOMessage('enderecoCliente atualizado com sucesso')
      this.router.navigate(["/enderecoCliente"])
    })

  }

  cancel(): void {
    this.router.navigate(['/enderecoCliente'])
  }


}
