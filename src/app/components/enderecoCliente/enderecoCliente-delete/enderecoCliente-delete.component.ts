import { EnderecoClienteService } from '../enderecoCliente.service';
import { enderecoCliente } from '../enderecoCliente.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enderecoCliente-delete',
  templateUrl: './enderecoCliente-delete.component.html',
  styleUrls: ['./enderecoCliente-delete.component.scss']
})
export class EnderecoClienteDeleteComponent implements OnInit {

  enderecoCliente!: enderecoCliente;

  constructor(private EnderecoClienteService: EnderecoClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.EnderecoClienteService.findById(id!).subscribe(enderecoCliente =>
      this.enderecoCliente = enderecoCliente
    )
  }

  deleteenderecoCliente(): void {
    this.EnderecoClienteService.delete(this.enderecoCliente.id!).subscribe(() => {
      this.EnderecoClienteService.ShowOMessage('enderecoCliente Excluido com sucesso')
      this.router.navigate(['/enderecoCliente'])
    })

  }

  cancel(): void {
    this.router.navigate(['/enderecoCliente'])
  }

}
