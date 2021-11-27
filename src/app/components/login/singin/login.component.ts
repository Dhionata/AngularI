import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({

  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

    loginForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {

}
ngOnInit(): void {
  this.loginForm = this.formBuilder.group({

  userName: ['', Validators.required],
  password: ['', Validators.required]

  });

}
}
