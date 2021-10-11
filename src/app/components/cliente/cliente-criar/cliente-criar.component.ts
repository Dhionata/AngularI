import { cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cliente-criar',
  templateUrl: './cliente-criar.component.html',
  styleUrls: ['./cliente-criar.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  cliente: cliente = {
    nome: '',
    email: null!,
    quantidade: null!,
    id: 0
  }

  constructor(private ClienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {

  }

  Createcliente(): void {
    this.ClienteService.create(this.cliente).subscribe(() => {
      this.ClienteService.ShowOMessage('cliente criado!')
      this.router.navigate(['/cliente'])

    })

  }
  cancel(): void {
    this.router.navigate(['/cliente'])
  }


}
