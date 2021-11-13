import { NgModule } from "@angular/core";
import { LoginComponent } from "./singin/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule ({

  declarations: [LoginComponent],
  imports: [ CommonModule, ReactiveFormsModule]

})

export class loginModule {}
