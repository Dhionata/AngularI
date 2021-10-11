import { TelefoneClienteService } from '../telefoneCliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefoneCliente } from '../telefoneCliente.model';

@Component({
  selector: 'app-TelefoneCliente-update',
  templateUrl: './TelefoneCliente-update.component.html',
  styleUrls: ['./TelefoneCliente-update.component.scss']
})
export class TelefoneClienteUpdateComponent implements OnInit {

  TelefoneCliente!: TelefoneCliente;

  constructor(private TelefoneClienteService: TelefoneClienteService,
     private router: Router,
     private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TelefoneClienteService.findById(id!).subscribe(TelefoneCliente =>
      this.TelefoneCliente = TelefoneCliente)
  }

    updateTelefoneCliente(): void{
      this.TelefoneClienteService.update(this.TelefoneCliente).subscribe(() => {
      this.TelefoneClienteService.ShowOMessage('TelefoneCliente atualizado com sucesso')
      this.router.navigate(["/TelefoneCliente"])
    })

    }

    cancel(): void {
      this.router.navigate(['/TelefoneCliente'])
    }


}
