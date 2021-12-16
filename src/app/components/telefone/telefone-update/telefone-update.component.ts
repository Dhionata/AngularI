import { TelefoneService } from '../telefone.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Telefone } from '../telefone.model';

@Component({
  selector: 'app-telefone-update',
  templateUrl: './telefone-update.component.html',
  styleUrls: ['./telefone-update.component.scss']
})
export class TelefoneUpdateComponent implements OnInit {

  telefone: Telefone = {
    numero: '',
    usuario: null!
  }

  constructor(private telefoneService: TelefoneService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.telefoneService.findById(id!).subscribe(telefone =>
      this.telefone = telefone
    )
    console.log("Olha.. isso é oq veio do banco para atualizar...\n" + this.telefone)
  }

  updateTelefone(): void {
    console.log("Telefone Enviado: " + this.telefone)
    this.telefoneService.update(this.telefone).subscribe(() => {
      this.telefoneService.ShowOMessage('Telefone atualizado com sucesso')
      this.router.navigate(["/telefone"])
    })

  }

  cancel(): void {
    this.router.navigate(['/telefone'])
  }


}
