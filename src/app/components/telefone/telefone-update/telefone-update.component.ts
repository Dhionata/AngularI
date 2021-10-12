import { TelefoneService } from '../telefone.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Telefone } from '../telefone.model';

@Component({
  selector: 'app-Telefone-update',
  templateUrl: './Telefone-update.component.html',
  styleUrls: ['./Telefone-update.component.scss']
})
export class TelefoneUpdateComponent implements OnInit {

  Telefone!: Telefone;

  constructor(private TelefoneService: TelefoneService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.TelefoneService.findById(id!).subscribe(Telefone =>
      this.Telefone = Telefone)
  }

  updateTelefone(): void {
    this.TelefoneService.update(this.Telefone).subscribe(() => {
      this.TelefoneService.ShowOMessage('Telefone atualizado com sucesso')
      this.router.navigate(["/Telefone"])
    })

  }

  cancel(): void {
    this.router.navigate(['/Telefone'])
  }


}
