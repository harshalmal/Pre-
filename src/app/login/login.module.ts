import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { VerifyComponent } from './verify/verify.component';



@NgModule({
  declarations: [
    UsernameComponent,
    PasswordComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
