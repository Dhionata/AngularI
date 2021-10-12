import { cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent implements OnInit {

  cliente!: cliente;

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

  deletecliente(): void {
    this.ClienteService.delete(this.cliente.id!).subscribe(() => {
      this.ClienteService.ShowOMessage('cliente Excluido com sucesso')
      this.router.navigate(['/cliente'])
    })

  }

  cancel(): void {
    this.router.navigate(['/cliente'])
  }

}
