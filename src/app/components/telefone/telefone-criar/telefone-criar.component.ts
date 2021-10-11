import { Telefone } from '../telefone.model';
import { TelefoneService } from '../telefone.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Telefone-criar',
  templateUrl: './Telefone-criar.component.html',
  styleUrls: ['./Telefone-criar.component.scss']
})
export class TelefoneCreateComponent implements OnInit {

  Telefone: Telefone = {
    nome:'',
    preco: null!,
    quantidade: null!
  }

  constructor(private TelefoneService: TelefoneService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateTelefone(): void {
    this.TelefoneService.create(this.Telefone).subscribe(() => {
      this.TelefoneService.ShowOMessage('Telefone criado!')
      this.router.navigate(['/Telefone'])

    })

  }
  cancel(): void {
    this.router.navigate(['/Telefone'])
  }


}
