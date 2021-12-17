import { Telefone } from '../telefone.model';
import { TelefoneService } from '../telefone.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Telefone-criar',
  templateUrl: './telefone-criar.component.html',
  styleUrls: ['./telefone-criar.component.scss']
})
export class TelefoneCreateComponent implements OnInit {

  telefone = new Telefone()

  constructor(private telefoneService: TelefoneService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateTelefone(): void {
    this.telefoneService.create(this.telefone).subscribe(() => {
      this.telefoneService.ShowOMessage('Telefone criado!')
      this.router.navigate(['/telefone'])

    })

  }
  cancel(): void {
    this.router.navigate(['/telefone'])
  }


}
