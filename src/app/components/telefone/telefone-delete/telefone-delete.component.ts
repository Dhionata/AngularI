import { TelefoneService } from '../telefone.service';
import { Telefone } from '../telefone.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Telefone-delete',
  templateUrl: './telefone-delete.component.html',
  styleUrls: ['./telefone-delete.component.scss']
})
export class TelefoneDeleteComponent implements OnInit {

  telefone: Telefone = {
    numero: "",
    usuario: null!
  }

  constructor(private telefoneService: TelefoneService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.telefoneService.findById(id!).subscribe(Telefone =>
      this.telefone = Telefone
    )
    console.log(this.telefone.numero + "\n" + this.telefone.usuario + "\n" + this.telefone.id)
  }

  deleteTelefone(): void {
    this.telefoneService.delete(this.telefone).subscribe(() => {
      this.telefoneService.ShowOMessage('Telefone Excluido com sucesso')
      this.router.navigate(['/telefone'])
    })

  }

  cancel(): void {
    this.router.navigate(['/telefone'])
  }

}
