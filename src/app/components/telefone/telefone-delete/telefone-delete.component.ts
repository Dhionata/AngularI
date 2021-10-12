import { TelefoneService } from '../telefone.service';
import { Telefone } from '../telefone.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Telefone-delete',
  templateUrl: './Telefone-delete.component.html',
  styleUrls: ['./Telefone-delete.component.scss']
})
export class TelefoneDeleteComponent implements OnInit {

  Telefone!: Telefone;

  constructor(private TelefoneService: TelefoneService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TelefoneService.findById(id!).subscribe(Telefone =>
      this.Telefone = Telefone
    )
  }

  deleteTelefone(): void {
    this.TelefoneService.delete(this.Telefone.id!).subscribe(() => {
      this.TelefoneService.ShowOMessage('Telefone Excluido com sucesso')
      this.router.navigate(['/Telefone'])
    })

  }

  cancel(): void {
    this.router.navigate(['/Telefone'])
  }

}
