import { Component } from '@angular/core';

import { FormBuilder } from "@angular/forms";

@Component({

    selector:'app-login',

    templateUrl:'./login.component.html',

    styleUrls: ['./login.component.scss']

})

export class LoginComponent {

    form: any;
    formBuilder: any;

    constructor(privateformBuilder:FormBuilder) {

        this.criarForm();

    }

    criarForm(){

        this.form = this.formBuilder.group({

            email: [''],

            senha: ['']

        })

    }

}
