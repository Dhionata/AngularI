import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {

  cliente!: cliente;

  constructor(private ClienteService: ClienteService,
     private router: Router,
     private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ClienteService.findById(id!).subscribe(cliente =>
      this.cliente = cliente)
  }

    updatecliente(): void{
      this.ClienteService.update(this.cliente).subscribe(() => {
      this.ClienteService.ShowOMessage('Cliente atualizado com sucesso')
      this.router.navigate(["/cliente"])
    })

    }

    cancel(): void {
      this.router.navigate(['/cliente'])
    }


}
