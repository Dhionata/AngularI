import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoUsuario } from '../../tipoUsuario/tipoUsuario.model';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent implements OnInit {

  cliente = new Cliente()

  constructor(private ClienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ClienteService.findById(id!).subscribe(cliente =>
      this.cliente = cliente
    )
  }

  deleteCliente(): void {
    this.ClienteService.delete(this.cliente).subscribe(() => {
      this.ClienteService.ShowOMessage('cliente excluido com sucesso')
      this.router.navigate(['/cliente'])
    })

  }

  cancel(): void {
    this.router.navigate(['/cliente'])
  }

}
