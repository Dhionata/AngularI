import { TelefoneClienteService } from '../telefoneCliente.service';
import { TelefoneCliente } from '../telefoneCliente.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-TelefoneCliente-delete',
  templateUrl: './TelefoneCliente-delete.component.html',
  styleUrls: ['./TelefoneCliente-delete.component.scss']
})
export class TelefoneClienteDeleteComponent implements OnInit {

  TelefoneCliente!: TelefoneCliente;

  constructor(private TelefoneClienteService: TelefoneClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TelefoneClienteService.findById(id!).subscribe(TelefoneCliente =>
      this.TelefoneCliente = TelefoneCliente
    )
  }

  deleteTelefoneCliente(): void {
    this.TelefoneClienteService.delete(this.TelefoneCliente).subscribe(() => {
      this.TelefoneClienteService.ShowOMessage('TelefoneCliente Excluido com sucesso')
      this.router.navigate(['/TelefoneCliente'])
    })

  }

  cancel(): void {
    this.router.navigate(['/TelefoneCliente'])
  }

}
