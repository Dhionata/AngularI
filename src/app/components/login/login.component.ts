import { Component, OnInit } from '@angular/core';

import { EmailValidator, FormBuilder } from "@angular/forms";
import { AuthService } from './auth.service';
import { Usuario } from '../usuario/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  formBuilder: any;
  form: any;

  /* private usuario: usuario new usuario(); */

  constructor(privateformBuilder:FormBuilder, private AuthService : AuthService) {

    email: ''
    senha: ''

}
/*   ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 */
    fazerlogin(){

    }
  /* criarForm(){

      this.form = this.formBuilder.group({

          email: [''],

          senha: ['']

      })

  } */

}
