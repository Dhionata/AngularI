import { Component, OnInit } from '@angular/core';

import { EmailValidator, FormBuilder } from "@angular/forms";
import { AuthService } from './auth.service';
import { Usuario } from '../usuario/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./css/main.css', './css/util.css', './vendor/select2/select2.min.css',
    './vendor/daterangepicker/daterangepicker.css', './vendor/css-hamburgers/hamburgers.min.css',
    './vendor/bootstrap/css/bootstrap.min.css', './vendor/animsition/css/animsition.min.css',
    './vendor/animate/animate.css', './fonts/font-awesome-4.7.0/css/font-awesome.min.css',
    './fonts/Linearicons-Free-v1.0.0/icon-font.min.css']
})

export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }
  formBuilder: any;
  form: any;

  constructor(privateformBuilder: FormBuilder, private AuthService: AuthService) {

    email: ''
    senha: ''

  }

  fazerLogin() {

  }
}
